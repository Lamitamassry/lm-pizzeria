import express from 'express';
import { signup, login, getProfile } from '../controllers/authController.js';
import { authRequired } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/me', authRequired, getProfile);

export default router;
