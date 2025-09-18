export default function handler(req, res) {
  res.status(200).json({
    track: "Hello World",
    artist: "From Spotify API"
  });
}
