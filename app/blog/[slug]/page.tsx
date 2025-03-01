import SectionTitle from '@/components/sectionTitle';
import BlogSample from '@/components/blogSample';

import { getBlogPostBySlug, blogCount } from '@/app/blog/data/getBlogPost';
import Post from '@/app/blog/components/post';

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  function getMoreBlogs() {
    // start with next chronological blog and find remaining by incrementing by 3

    const mod = (value: number) => value % blogCount || blogCount;

    const first = mod(Number(params.slug) + 1);
    const second = mod(first + 3);
    const third = mod(second + 3);
    const fourth = mod(third + 3);

    const ids = [
      first.toString(),
      second.toString(),
      third.toString(),
      fourth.toString(),
    ];

    return ids.map((id) => getBlogPostBySlug(id));
  }

  return (
    <main>
      {post && <Post key={post.title} {...post} />}

      <section>
        <SectionTitle title='More' />
        <BlogSample selectedBlogs={getMoreBlogs()} />
      </section>
    </main>
  );
}
