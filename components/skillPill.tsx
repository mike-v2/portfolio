import Image from 'next/image'

export default function SkillPill({
  name,
  imagePath,
  className,
}: {
  name: string;
  imagePath: string;
  className?: string;
}) {
  const textSize = name.length > 7 ? 'text-lg' : 'text-2xl';
  const displayName = name.split(' ');
  const gap = displayName.length > 1 ? 'gap-y-0' : 'gap-y-4';

  return (
    <div
      className={`flex flex-col items-center justify-center ${gap} h-48 w-32 rounded-full border border-stone-400`}
    >
      <div>
        {displayName &&
          displayName.map((dName, i) => (
            <p className={`text-center ${textSize}`} key={i}>
              {dName}
            </p>
          ))}
      </div>
      <div className='flex h-16 w-16 items-center'>
        <Image
          src={imagePath}
          className={`h-auto w-full ${className}`}
          height={0}
          width={0}
          sizes='100vw'
          alt={`${name} logo`}
        />
      </div>
    </div>
  );
}