export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  try {
    const response = await fetch(
      'https://liamcarte.app.n8n.cloud/webhook-test/roof-demo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    )

    if (!response.ok) {
      return res.status(502).json({
        message: 'n8n webhook failed',
      })
    }

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: 'Unable to submit lead',
    })
  }
}