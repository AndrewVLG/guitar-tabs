import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GuitarFormation } from "./schema/guitarFormation.schema";

@Injectable({})

export class GuitarFormationService {
    constructor(@InjectModel(GuitarFormation.name) private guitarFormationModel: Model<GuitarFormation>) {}

    async getAll() {
        const response = await this.guitarFormationModel.find();
        const arr = response.map(elem => ({name: elem.name, formation: elem.formation}));
        return arr;
    }
}