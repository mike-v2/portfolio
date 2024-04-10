import SectionTitle from '@/components/sectionTitle';
import BlogSample from '@/components/blogSample';

import getBlogPostBySlug, { blogCount } from '@/app/blog/data/getBlogPost';
import Post from '@/app/blog/components/post';

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  function getMoreBlogs() {
    // start with next chronological blog and find remaining by incrementing by 3

    const first = (Number(params.slug) + 1) % blogCount || blogCount;
    const second = (first + 3) % blogCount || blogCount;
    const third = (second + 3) % blogCount || blogCount;
    const fourth = (third + 3) % blogCount || blogCount;

    return [
      first.toString(),
      second.toString(),
      third.toString(),
      fourth.toString(),
    ];
  }

  return (
    <main>
      {post && <Post key={post.title} {...post} />}

      <SectionTitle title='More' />
      <div className='bg-gray-800'>
        <BlogSample ids={getMoreBlogs()} />
      </div>
    </main>
  );
}
