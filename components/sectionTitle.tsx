export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className='my-6 p-8 text-center text-[clamp(3rem,6vw,6rem)] md:my-24'>
      {title}
    </h2>
  );
}
