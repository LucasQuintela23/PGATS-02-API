// controllers/userController.js
import express from 'express';
import userService from '../services/userService.js';
const router = express.Router();

router.post('/register', (req, res) => {
  try {
    const user = userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', (req, res) => {
  try {
    const user = userService.loginUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  res.json(userService.getUsers());
});

export default router;
