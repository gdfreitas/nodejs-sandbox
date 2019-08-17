import { Injectable } from "@nestjs/common";

import { Post } from './post.interface';
import { PostDto } from "./post.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'

@Injectable()
export class PostsService {

  constructor(@InjectModel('Post') private readonly itemModel: Model<Post>) { }

  async findAll(): Promise<Post[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Post> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Post): Promise<Post> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Post> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Post): Promise<Post> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

}