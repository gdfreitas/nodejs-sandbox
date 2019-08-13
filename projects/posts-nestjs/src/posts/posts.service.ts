import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from 'uuid'

import { Post } from './post.model';

@Injectable()
export class PostsService {

  private posts: Post[] = [];

  insertPost(title: string, content: string): string {
    const generatedId = uuid();
    const post = new Post(generatedId, title, content);
    this.posts.push(post);
    return generatedId;
  }

  getPosts() {
    return [...this.posts];
  }

  getSinglePost(postId: string) {
    const post = this.findPost(postId)[0];
    return { ...post }
  }

  updateProduct(postId: string, title: string, content: string) {
    const [post, index] = this.findPost(postId);

    const updated = { ...post };
    if (title) {
      updated.title = title;
    }

    if (content) {
      updated.content = content;
    }

    this.posts[index] = updated;
  }

  private findPost(id: string): [Post, number] {
    const postIndex = this.posts.findIndex(post => post.id === id)
    const post = this.posts[postIndex];

    if (!post) {
      throw new NotFoundException(`Não foi possível localizar o post de código ${id}`)
    }

    return [post, postIndex];
  }

}