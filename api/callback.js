export default function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Missing code" });
  }

  res.status(200).json({
    message: "Authorization code received!",
    code: code
  });
}