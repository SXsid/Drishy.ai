import { Request, Response } from "express";
import { TrainModel } from "@repo/common";
import aiHandler from "src/services/aiHandler";
class aiController {
  static async TrainModel(req: Request, res: Response) {
    const data = req.body;
    const response = await aiHandler.TrainModelHandler(data);
  }
}
export default aiController;
