import { Buffer } from 'node:buffer'

const N8N_WEBHOOK_URL = 'https://liamcarte.app.n8n.cloud/webhook-test/roof-demo'

async function parseRequestBody(req) {
  const { body } = req

  if (body && typeof body === 'object' && !Buffer.isBuffer(body)) {
    return body
  }

  const rawBody = Buffer.isBuffer(body)
    ? body.toString('utf8')
    : typeof body === 'string'
      ? body
      : await readRequestBody(req)

  if (!rawBody) {
    throw new Error('Request body is required')
  }

  return JSON.parse(rawBody)
}

async function readRequestBody(req) {
  const chunks = []

  for await (const chunk of req) {
    chunks.push(chunk)
  }

  return Buffer.concat(chunks).toString('utf8')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  let lead

  try {
    lead = await parseRequestBody(req)
  } catch (error) {
    console.error('LEAD BODY ERROR:', error)

    return res.status(400).json({
      message: 'Invalid JSON request body',
    })
  }

  try {
    console.log('LEAD RECEIVED:', lead)

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    })

    console.log('N8N RESPONSE:', webhookResponse.status)

    if (!webhookResponse.ok) {
      return res.status(502).json({
        message: 'n8n webhook failed',
        status: webhookResponse.status,
      })
    }

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    console.error('LEAD ERROR:', error)

    return res.status(500).json({
      message: error.message || "Couldn't send lead",
    })
  }
}
