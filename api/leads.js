export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  try {
    const lead = req.body

    console.log('LEAD RECEIVED:', lead)

    const webhookResponse = await fetch(
      'https://liamcarte.app.n8n.cloud/webhook-test/roof-demo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      }
    )

    const responseText = await webhookResponse.text()

    console.log(
      'N8N RESPONSE:',
      webhookResponse.status,
      responseText
    )

    if (!webhookResponse.ok) {
      return res.status(502).json({
        message: 'n8n webhook failed',
        status: webhookResponse.status,
        response: responseText,
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