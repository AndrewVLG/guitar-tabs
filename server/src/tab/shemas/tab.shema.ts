import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TabDocument = HydratedDocument<Tab>;

@Schema()
export class Tab {
  @Prop()
  artist: string

  @Prop()
  audio: string
  
  @Prop()
  _id: mongoose.Schema.Types.ObjectId

  @Prop()
  _n: string
  
  @Prop()
  title: string

  @Prop()
  text: string
  
  @Prop()
  album: string

  @Prop()
  link: string
}

export const TabSchema = SchemaFactory.createForClass(Tab)