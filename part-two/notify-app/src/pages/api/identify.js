import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ error: `${req.method} method is not accepted.` });
  }

  const userId = req.body.id || uuidv4();
  const name = req.body.name || faker.name.findName();

  try {
    // TODO: identify Knock user here
    const knockUser = { id: userId, name };

    return res.status(200).json({ error: null, user: knockUser });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || error.toString(), user: null });
  }
}
