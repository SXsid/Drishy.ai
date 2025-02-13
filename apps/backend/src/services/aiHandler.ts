import { TrainModel, TrainModelType } from "@repo/common";
import { prismaClient } from "@repo/db";
import { z } from "zod";
class aiHandler {
  static async TrainModelHandler(data: TrainModelType) {
    const { success } = TrainModel.safeParse(data);
    try{
      if(!success){
        return{result:false,msg:"Invalid Inputs.."}
      }
      await prismaClient.model.create({
        data:{
          name:data.name,
          eithinicity:data.ethinicity,
          eyeColor:data.eyeColor,
          type:data.type,
          age:data.age,
          
          

        }
      })
    }
  }
}
export default aiHandler;
