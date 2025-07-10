import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { acceptFriendReq, getFriendReq, getMyFriends, getOutgoingReq, getRecommendedUser, sendFriendReq } from '../controllers/user.controller.js'

const router = express.Router()

router.use(protectRoute)

router.get('/',getRecommendedUser)
router.get('/friends', getMyFriends)

router.post("/friend-req/:id", sendFriendReq)
router.post("/friend-req/:id/accept", acceptFriendReq)

export default router