import { NextResponse } from 'next/server';

function normalizePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length === 10) return '+91' + digits;
  if (digits.length === 12 && digits.startsWith('91')) return '+' + digits;
  if (digits.length >= 11 && digits.length <= 15) return '+' + digits;
  return null;
}

async function saveToSupabase(entry) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) {
    console.warn('Supabase env not set. Signup (not stored):', entry);
    return { ok: true, duplicate: false };
  }
  const headers = {
    'Content-Type': 'application/json',
    apikey: key,
    Prefer: 'return=minimal',
  };
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: 'POST',
    headers,
    body: JSON.stringify(entry),
  });
  if (res.ok) return { ok: true, duplicate: false };
  if (res.status === 409) return { ok: true, duplicate: true }; // phone already registered
  console.error('Supabase insert failed', res.status, await res.text());
  return { ok: false };
}

async function notifyTelegram(entry) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const text =
    `🆕 New FloorSquare signup\n` +
    `Name: ${entry.name}\nRole: ${entry.role}\nPhone: ${entry.phone}\n` +
    `https://wa.me/${entry.phone.replace('+', '')}`;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  } catch (err) {
    console.error('Telegram notify failed', err); // never block the signup on this
  }
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = String(data?.name || '').trim().slice(0, 100);
  const phone = normalizePhone(data?.phone);
  const role = ['broker', 'landlord', 'tenant'].includes(data?.role) ? data.role : 'broker';

  if (name.length < 2 || !phone) {
    return NextResponse.json({ error: 'Invalid name or phone' }, { status: 400 });
  }

  const entry = { name, phone, role };
  const result = await saveToSupabase(entry);
  if (!result.ok) {
    return NextResponse.json({ error: 'Could not save signup' }, { status: 502 });
  }
  if (!result.duplicate) await notifyTelegram(entry);

  return NextResponse.json({ ok: true });
}
