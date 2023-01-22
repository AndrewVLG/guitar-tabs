import { Module } from "@nestjs/common";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as patch from 'path';
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumModule } from "./album/album.module";
import { TabModule } from "./tab/tab.module";
import { ArtistModule } from './artist/artist.module'
import { GuitarFormationModule } from "./guitarFormation/guitarFormation.module";

@Module({
imports: 
    [
        MongooseModule.forRoot('mongodb+srv://Andrew:admin@cluster0.rqc2juz.mongodb.net/tabs?retryWrites=true&w=majority'),
        TabModule,
        AlbumModule,
        ArtistModule,
        GuitarFormationModule,
        ServeStaticModule.forRoot({rootPath: patch.resolve(__dirname, '..', 'src', 'static')})
    ]
})
export class AppModule {}