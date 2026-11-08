-- Run this in Supabase: SQL Editor > New query
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null unique,
  role text not null check (role in ('broker', 'landlord', 'tenant')),
  created_at timestamptz not null default now()
);

-- RLS on with no policies = the public anon key can't read or write.
-- Only your server (service key) can insert, and you read leads in the dashboard.
alter table public.waitlist enable row level security;
