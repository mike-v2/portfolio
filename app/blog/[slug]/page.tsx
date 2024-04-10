import getBlogPostBySlug from '@/app/blog/data/getBlogPost';
import Post from '@/app/blog/components/post';

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  return (
    <section>
      <div>{post && <Post key={post.title} {...post} />}</div>
    </section>
  );
}
