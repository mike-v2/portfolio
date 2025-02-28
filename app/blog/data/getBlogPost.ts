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

export const blogPosts = [
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

export const blogCount = blogPosts.length;

export function getBlogPostBySlug(slug: string): BlogPost {
  return blogPosts.find((post) => post.id === slug) ?? post1;
}
