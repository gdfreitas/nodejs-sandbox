import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { PostSchema } from './post.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule { }