export default function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "No code found in query" });
  }

  // Show the code so you can copy it
  res.status(200).json({ code });
}