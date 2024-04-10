import BlogSample from '@/components/blogSample';
import SectionTitle from '@/components/sectionTitle';

/* const selectedBlogs = [
  {
    id: '2',
    title: 'Deep Dive into Software Testing',
    date: '2023-09-27',
    imagePath: '/images/blog-testing.jpg',
  },
  {
    id: '3',
    title: 'Deciphering the Past',
    date: '2023-09-30',
    imagePath: '/images/blog-journal.jpg',
  },
  {
    id: '4',
    title: 'Adding Authentication to my Next.js App',
    date: '2023-10-09',
    imagePath: '/images/blog-next-auth.jpg',
  },
  {
    id: '10',
    title: 'Login Logic',
    date: '2024-03-18',
    imagePath: '/images/blog-passport-auth.jpg',
  },
]; */

const ids = ['2', '3', '4', '10'];

export default function BlogPreview() {
  return (
    <section>
      <SectionTitle title='Blog' />
      <BlogSample ids={ids} />
    </section>
  );
}
