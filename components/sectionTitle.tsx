import { cn } from '@/utils/cn';

export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'my-6 p-8 text-center text-[clamp(3rem,6vw,6rem)] md:my-24',
        className,
      )}
    >
      {title}
    </h2>
  );
}
