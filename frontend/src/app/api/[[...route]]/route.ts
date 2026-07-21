import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000/api"

export async function GET(request: NextRequest) {
  return proxyRequest(request, "GET")
}

export async function POST(request: NextRequest) {
  return proxyRequest(request, "POST")
}

export async function PUT(request: NextRequest) {
  return proxyRequest(request, "PUT")
}

export async function PATCH(request: NextRequest) {
  return proxyRequest(request, "PATCH")
}

export async function DELETE(request: NextRequest) {
  return proxyRequest(request, "DELETE")
}

async function proxyRequest(request: NextRequest, method: string) {
  const path = request.nextUrl.pathname.replace("/api/", "")
  const searchParams = request.nextUrl.searchParams.toString()
  const url = `${BACKEND_URL}/${path}${searchParams ? `?${searchParams}` : ""}`

  const token = request.cookies.get("token")?.value

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  try {
    const body = method !== "GET" ? await request.json().catch(() => undefined) : undefined

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })

    const data = await response.json().catch(() => null)

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error(`Proxy error [${method} ${url}]:`, error)
    return NextResponse.json({ message: "Backend service unavailable" }, { status: 503 })
  }
}
