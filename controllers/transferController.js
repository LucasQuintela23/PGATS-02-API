// controllers/transferController.js
import express from 'express';
import transferService from '../services/transferService.js';
const router = express.Router();

router.post('/', (req, res) => {
  try {
    const transfer = transferService.transfer(req.body);
    res.status(201).json(transfer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  res.json(transferService.getTransfers());
});

export default router;
