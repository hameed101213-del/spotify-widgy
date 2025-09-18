export default async function handler(req, res) {
  const nowPlaying = {
    track: "Test Track",
    artist: "Test Artist"
  };

  res.status(200).json(nowPlaying);
}
