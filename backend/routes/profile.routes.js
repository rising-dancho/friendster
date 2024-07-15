import { Router } from 'express';
import {
  getAllProfile,
  getProfile,
  postProfile,
  deleteProfile,
  updateProfile,
} from '../controllers/profile.controller.js';
import requireAuth from '../middleware/requireAuth.js';

// initialize router
const router = Router();

// protecting the routes (require authentication)
router.use(requireAuth);

router.get('/', getAllProfile);
router.get('/:id', getProfile);
router.post('/', postProfile);
router.delete('/:id', deleteProfile);
router.patch('/:id', updateProfile);

export default router;
