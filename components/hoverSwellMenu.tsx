import Link from 'next/link';
import Image from 'next/image';

import { LuArrowRight } from 'react-icons/lu';

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
          <div className='relative z-20 flex h-full flex-col items-start justify-center p-4 ps-12 md:flex-row md:items-center md:justify-start'>
            <h3 className='whitespace-nowrap text-[clamp(1.5rem,2vw,4rem)] text-primary group-hover:text-shadow md:basis-1/3'>
              {item.title}
            </h3>
            <div className='relative text-[clamp(1.5rem,2vw,4rem)] md:basis-2/3'>
              <div className='font-bold text-primary-content transition-all delay-100 duration-500 group-hover:text-primary group-hover:text-shadow'>
                {item.subtitle}
              </div>
              <div className='absolute top-full h-fit overflow-y-hidden'>
                <div className='flex gap-x-4 text-primary group-hover:text-shadow'>
                  <div className='translate-y-full transition-transform duration-700 group-hover:translate-y-0'>{`Project Details`}</div>
                  <div className='flex translate-y-full items-center transition-transform duration-1000 group-hover:translate-y-0'>
                    <LuArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
