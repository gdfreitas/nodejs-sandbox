import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";

import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) { }

  @Post()
  addPost(
    @Body('title') title: string,
    @Body('content') content: string,
  ): any {
    const generatedId = this.postsService.insertPost(title, content)

    return {
      id: generatedId
    }
  }

  @Get()
  getAllPosts(): any {
    return this.postsService.getPosts()
  }

  @Get(':id')
  getPost(@Param('id') postId: string) {
    return this.postsService.getSinglePost(postId);
  }

  @Patch(':id')
  updateProduct(@Param('id') postId: string, @Body('title') title: string, @Body('content') content: string) {
    this.postsService.updateProduct(postId, title, content);
    return null;
  }

}