import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import {
  IsString,
  IsNumber
} from 'class-validator';

export type MatthewDocument = Matthew & Document;

@Schema({ timestamps: true })
export class Matthew {
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

export const matthewSchema = SchemaFactory.createForClass(Matthew);
