export async function submitLead(data) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseText = await response.text().catch(() => '')
  let responseData = null

  if (responseText) {
    try {
      responseData = JSON.parse(responseText)
    } catch {
      // A successful API response does not need to contain JSON.
    }
  }

  if (!response.ok) {
    throw new Error(responseData?.message || 'Failed to submit lead')
  }

  return responseData || { ok: true }
}
