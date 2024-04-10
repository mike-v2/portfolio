import {
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
} from '@/app/blog/data';
import { BlogPost } from '@/types/postData';

const posts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
].reverse();

export default function getBlogPostBySlug(slug: string): BlogPost {
  return posts.find((post) => post.id === slug) ?? post1;
}

export const blogCount = posts.length;
