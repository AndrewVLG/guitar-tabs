import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export type AlbumDocument = mongoose.HydratedDocument<GuitarFormation>;

@Schema()
export class GuitarFormation {
  @Prop()
  name: string

  @Prop()
  formation: [];


}

export const GuitarFormationSchema = SchemaFactory.createForClass(GuitarFormation);