import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common";

import { PostsService } from "./posts.service";
import { PostDto } from './post.dto'
import { Post as PostItem } from './post.interface'

@Controller('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  findAll(): Promise<PostItem[]> {
    return this.postsService.findAll()
  }

  @Get(':id')
  // getPostById(@Req() req: Request, @Res() res: Response)
  findOne(@Param('id') postId: string): Promise<PostItem> {
    return this.postsService.findOne(postId);
  }

  @Post()
  // createPost(@Body('title') title: string, @Body('content') content: string)
  create(@Body() representation: PostDto): Promise<PostItem> {
    return this.postsService.create(representation)
  }

  @Put(':id')
  update(@Param('id') postId: string, @Body() representation: PostDto): Promise<PostItem> {
    return this.postsService.update(postId, representation);
  }

  @Delete(':id')
  delete(@Param('id') postId: string): Promise<PostItem> {
    return this.postsService.delete(postId);
  }

}