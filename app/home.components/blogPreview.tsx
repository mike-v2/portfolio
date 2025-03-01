import BlogSample from '@/components/blogSample';
import SectionTitle from '@/components/sectionTitle';
import { getBlogPostBySlug } from '@/app/blog/data/getBlogPost';

const ids = ['2', '3', '4', '10'];

export default function BlogPreview() {
  const blogs = ids.map((id) => getBlogPostBySlug(id));

  return (
    <section>
      <SectionTitle title='Blog' />
      <BlogSample selectedBlogs={blogs} />
    </section>
  );
}
