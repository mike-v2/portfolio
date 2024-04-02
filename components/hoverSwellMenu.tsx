import Link from 'next/link';
import Image from 'next/image';

export default function HoverSwellMenu({
  items,
}: {
  items: HoverSwellMenuItem[];
}) {
  return (
    <div className={`flex h-[45rem] w-full flex-col divide-y-2 divide-primary`}>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className='group relative basis-3/4 overflow-hidden transition-all duration-500 hover:basis-full'
        >
          <div className='absolute inset-0 scale-125 transition-all duration-[3000ms] ease-out group-hover:scale-100'>
            <Image
              src={item.imagePath}
              alt={item.title}
              fill
              className='object-cover'
            />
          </div>
          <div className='absolute inset-0 z-10 w-full bg-base-100 transition-all duration-700 group-hover:translate-x-full'></div>
          <div className='relative z-20 flex h-full flex-col items-center p-4 md:flex-row'>
            <h3 className='group-hover:text-shadow basis-1/3 whitespace-nowrap px-12 text-[clamp(1rem,2vw,4rem)] text-primary'>
              {item.title}
            </h3>
            <div className='relative basis-2/3 text-[clamp(1rem,2vw,4rem)]'>
              <p className='group-hover:text-shadow font-bold text-primary-content transition-colors duration-500 group-hover:text-primary'>
                {item.subtitle}
              </p>
              <div className='absolute top-full h-fit overflow-y-hidden'>
                <div className='group-hover:text-shadow flex gap-x-4 text-primary'>
                  <p className='translate-y-full transition-transform duration-700 group-hover:translate-y-0'>{`Project Details`}</p>
                  <p className='translate-y-full transition-transform duration-1000 group-hover:translate-y-0'>{`->`}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
