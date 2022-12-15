import { Module } from "@nestjs/common/decorators";
import { MongooseModule } from "@nestjs/mongoose";
import { Tab, TabSchema } from "src/tab/shemas/tab.shema";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";
import { Album, AlbumSchema } from "./shemas/album.schema";

@Module({
    imports:
    [
        MongooseModule.forFeature([{name:Album.name, schema: AlbumSchema}]),
        MongooseModule.forFeature([{name:Tab.name, schema: TabSchema}]),
    ],
    controllers: [AlbumController],
    providers: [AlbumService]
    
})

export class AlbumModule {
    
}