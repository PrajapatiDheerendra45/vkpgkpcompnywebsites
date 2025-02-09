import express from 'express';
import { mailController } from '../controllers/mailController.js';




const router = express.Router();

// Route to handle form submission and send email
router.post('/sendEmail',mailController );

export default router;
