import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
} from '../controllers/appointments.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getAppointments)
  .post(createAppointment);

router.route('/:id')
  .patch(updateAppointment)
  .delete(restrictTo('doctor'), deleteAppointment);

export default router;