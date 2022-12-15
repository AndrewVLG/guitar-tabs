import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TabDocument = HydratedDocument<Tab>;

@Schema()
export class Tab {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId;
  
  @Prop()
  title: string;

  @Prop()
  text: string;
  
  @Prop()
  album: string;

  @Prop()
  link: string;
}

export const TabSchema = SchemaFactory.createForClass(Tab)