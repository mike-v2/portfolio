export default function EmbeddedVideo({ src }: { src: string }) {
  return (
    <div className='relative mx-auto aspect-video w-full max-w-3xl overflow-hidden'>
      <iframe
        className='absolute inset-0 h-full w-full'
        src={src}
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}
