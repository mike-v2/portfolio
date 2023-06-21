import Image from 'next/image'


export default function SkillPill({ name, imagePath }: { name: string, imagePath: string }) {
  const textSize = name.length > 7 ? 'text-lg' : 'text-2xl';
  const displayName = name.split(' ');
  const gap = displayName.length > 1 ? 'gap-y-0' : 'gap-y-4';

  return (
    <div className={`flex flex-col justify-center ${gap} border border-stone-400 rounded-full w-32 h-48`}>
      <div>
        {displayName && displayName.map(dName =>
          <p className={`text-center ${textSize}`}>{dName}</p>
        )}
      </div>
      <Image src={imagePath} className='mx-auto' height={70} width={70} alt='react logo' />
    </div>
  )
}