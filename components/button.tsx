import { ComponentPropsWithRef, ReactNode, Ref, forwardRef } from 'react';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithRef<'button'>;

export const Button = forwardRef(
  (
    { children, className = '', ...rest }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className={`btn bg-primary px-8 text-primary-content hover:bg-primary hover:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'button';
