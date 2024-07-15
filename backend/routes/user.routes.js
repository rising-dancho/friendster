import { Router } from 'express';
import {
  getAllUsers,
  getUser,
  loginUser,
  signupUser,
  deleteUser,
  updateUser,
} from '../controllers/user.controller.js';

// initialize router
const router = Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
