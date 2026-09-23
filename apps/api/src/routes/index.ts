import { Router } from "express";
import authRoutes from "./auth.routes.js";
import contentRoutes from "./content.routes.js";
import dataRoutes from "./data.routes.js";
const router = Router();
router.use("/auth", authRoutes);
router.use("/content", contentRoutes);
router.use("/data", dataRoutes);
export default router;
