import getBlogPostBySlug from '@/app/blog/data/getBlogPost';
import Post from '@/app/blog/components/post';
import SectionTitle from '@/components/sectionTitle';
import BlogSample from '@/components/blogSample';

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  return (
    <main>
      {post && <Post key={post.title} {...post} />}

      <SectionTitle title='More' />
      <div className='bg-gray-800'>
        <BlogSample ids={['5', '6', '7', '8']} />
      </div>
    </main>
  );
}
