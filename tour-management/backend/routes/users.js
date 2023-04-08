import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser} from '../controllers/userController.js';
const router = express.Router()
// update tour
router.put("/:id", updateUser);
// delete tour
router.delete("/:id", deleteUser);
// get single tour
router.get("/:id", getSingleUser);
//get all tours
router.get("/", getAllUser);
export default router