import { ComponentPropsWithRef, Ref, forwardRef } from 'react';

export type AnchorProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithRef<'a'>;

export const Anchor = forwardRef(
  (
    { children, className = '', ...rest }: AnchorProps,
    ref: Ref<HTMLAnchorElement>,
  ) => (
    <a
      ref={ref}
      className={`text-blue-600 underline visited:text-purple-600 hover:text-blue-800 ${className}`}
      {...rest}
      target='_blank'
    >
      {children}
    </a>
  ),
);

Anchor.displayName = 'anchor';
