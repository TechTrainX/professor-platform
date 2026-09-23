import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { validate } from "../middleware/validate.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";
import { loginController, logoutController } from "../controllers/auth.controller.js";
const router = Router();
router.post("/login", validate(loginSchema), asyncHandler(loginController));
router.post("/logout", logoutController);
export default router;
