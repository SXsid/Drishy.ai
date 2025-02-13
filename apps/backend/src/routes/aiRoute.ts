import { Router } from "express";
import aiController from "src/controllers/aiController";
const router = Router();

router.post("/trainModel", aiController.TrainModel);

export default router;
