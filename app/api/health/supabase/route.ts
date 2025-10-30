import { NextResponse } from 'next/server'

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  if (!url || !anonKey) {
    return NextResponse.json({ status: 'error', message: 'missing env' }, { status: 500 })
  }

  const res = await fetch(`${url}/auth/v1/settings`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
    cache: 'no-store',
  })

  if (res.ok) return NextResponse.json({ status: 'ok' })
  const text = await res.text().catch(() => '')
  return NextResponse.json({ status: 'error', message: text || 'unreachable' }, { status: 500 })
}


