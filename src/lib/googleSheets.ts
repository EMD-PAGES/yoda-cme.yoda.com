export async function appendToSheet(data: {
  timestamp: string;
  name: string;
  email: string;
  registrationNumber: string;
  specialization: string;
  institution: string;
}) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) throw new Error('GOOGLE_SHEET_WEBHOOK_URL is not set');

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`Sheet write failed: ${res.status}`);
}
