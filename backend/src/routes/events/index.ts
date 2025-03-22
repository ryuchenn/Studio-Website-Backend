import express from "express";
import { mockEvents } from "../../constants/eventsMock.mock.ts";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json('Event API');
    } catch (error) {
        res.status(500).json({ message: 'Failed to get API', error });
    }
});

router.get('/MockData', (req, res) => {
  res.status(200).json(mockEvents);
});

export default router;