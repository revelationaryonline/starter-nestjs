import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import {
  IsString,
  IsNumber
} from 'class-validator';

export type SecondKingsDocument = SecondKings & Document;

@Schema({ timestamps: true })
export class SecondKings {
  @Prop({ required: true })
  @IsString()
  book: string;

  @Prop({ required: false })
  @IsNumber()
  chapter: number;

  @Prop({ required: false })
  @IsNumber()
  verse: number;

  @Prop({ type: String, index: 'text' })
  @IsString()
  text: { type: string, index: 'text' }
}

export const secondKingsSchema = SchemaFactory.createForClass(SecondKings);
