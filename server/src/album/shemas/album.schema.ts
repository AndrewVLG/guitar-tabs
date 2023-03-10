import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Tab } from 'src/tab/shemas/tab.shema';
export type AlbumDocument = mongoose.HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  artist: string

  @Prop()
  title: string;

  @Prop()
  year: string;

  @Prop()
  picture: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Tab"}]})
  songs: Tab[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);