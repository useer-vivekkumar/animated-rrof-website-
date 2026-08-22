export async function submitLead(data) {
  const response = await fetch(
    'https://liamcarte.app.n8n.cloud/webhook-test/roof-demo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    throw new Error('Failed to submit lead')
  }

  return response.json()
}