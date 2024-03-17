import { posts } from '@/app/blog/data';
import Post from '@/app/blog/components/post';

export default function Blog() {
  return (
    <main className='mx-auto max-w-5xl px-2 md:px-8'>
      <h1 className='my-12 text-center text-3xl font-bold'>Posts</h1>
      <div className='flex flex-col gap-y-10'>
        {posts && posts.map((post) => <Post key={post.title} {...post} />)}
      </div>
    </main>
  );
}