import { Router } from 'express';
import { postFriend, getAllFriendsWithData, getFriendById, updateFriendById, deleteFriendById } from '../controllers/friend.controller';

const router = Router();

router.get("/",getAllFriendsWithData);
router.get("/:id", getFriendById);
router.post("/",postFriend);
router.put("/:id",updateFriendById);
router.delete("/:id",deleteFriendById);

export default router;