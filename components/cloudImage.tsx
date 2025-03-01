'use client';

import { CldImage } from 'next-cloudinary';

export default function CloudImage({ src }: { src: string }) {
  return (
    <CldImage
      src={src}
      alt=''
      width={1000}
      height={1000}
      sizes='50vw'
      crop='fill'
    />
  );
}
