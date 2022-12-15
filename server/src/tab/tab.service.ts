import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Tab, TabDocument } from "./shemas/tab.shema";

@Injectable()

export class TabService {
    constructor(@InjectModel(Tab.name) private tabModel: Model<TabDocument>) {}
    async getAllTabs():Promise<Tab[]> {
        const tabs = await this.tabModel.find();
        return tabs;
    }

    async getOneTab(id: ObjectId):Promise<Tab> {
        const tab = await this.tabModel.findById(id);
        return tab;
    }
}