import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Album } from "src/album/shemas/album.schema";
export type ArtistDocument = mongoose.HydratedDocument<Artist>;
@Schema()
export class Artist {

    @Prop()
    name: string

    @Prop()
    year: string

    @Prop()
    description: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Album"}]})
    albums: Album[]
}

export const ArtistShema = SchemaFactory.createForClass(Artist);
