import BlogSample from '@/components/blogSample';
import SectionTitle from '@/components/sectionTitle';

const ids = ['2', '3', '4', '10'];

export default function BlogPreview() {
  return (
    <section>
      <SectionTitle title='Blog' />
      <BlogSample ids={ids} />
    </section>
  );
}
