import type { VercelRequest, VercelResponse } from "@vercel/node";
import { mockEvents } from "../../constants/eventsMock.mock.ts";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json(mockEvents);
}
