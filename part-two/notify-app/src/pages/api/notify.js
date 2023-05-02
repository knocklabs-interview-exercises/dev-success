export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ error: `${req.method} method is not accepted.` });
  }

  const { message, userId } = req.body;

  try {
    // TODO: trigger Knock workflow here
    return res.status(200).json({ error: null });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || error.toString(), user: null });
  }
}
