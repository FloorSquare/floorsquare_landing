import { NextResponse } from 'next/server';

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = String(data?.name || '').trim().slice(0, 100);
  const phone = String(data?.phone || '').replace(/[^\d+]/g, '');
  const role = ['broker', 'landlord', 'tenant'].includes(data?.role) ? data.role : 'broker';

  if (name.length < 2 || phone.replace('+', '').length < 10 || phone.length > 15) {
    return NextResponse.json({ error: 'Invalid name or phone' }, { status: 400 });
  }

  const entry = { name, phone, role, createdAt: new Date().toISOString() };
  const hook = process.env.WAITLIST_WEBHOOK_URL;

  if (!hook) {
    // No destination configured yet: signups only show in server logs.
    console.warn('WAITLIST_WEBHOOK_URL not set. Signup:', entry);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(entry),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Waitlist forward failed', err);
    return NextResponse.json({ error: 'Could not save signup' }, { status: 502 });
  }
}
