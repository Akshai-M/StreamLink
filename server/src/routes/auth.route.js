import { Router } from "express";
import { login, logout, onborad, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post('/onboarding', protectRoute, onborad)
router.get('/get', protectRoute, onborad)


export default router;
