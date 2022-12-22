import { Module } from "@nestjs/common/decorators";
import { MongooseModule } from "@nestjs/mongoose";
import { Album, AlbumSchema } from "src/album/shemas/album.schema";
import { ArtistController } from "./artist.controller";
import { ArtistService } from "./artist.service";
import { Artist, ArtistShema } from "./schema/artist.schema";

@Module({
    imports: [MongooseModule.forFeature([{name:Artist.name, schema: ArtistShema}]),
                MongooseModule.forFeature([{name:Album.name, schema: AlbumSchema}])],
    controllers: [ArtistController],
    providers: [ArtistService],
})

export class ArtistModule {}