import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Tab, TabSchema } from "./shemas/tab.shema";
import { TabController } from "./tab.controller";
import { TabService } from "./tab.service";

@Module({
    imports:
    [
        MongooseModule.forFeature([{name:Tab.name, schema: TabSchema}])
    ],
    controllers: [TabController],
    providers: [TabService],
})

export class TabModule {
    
}