import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 text-md font-light w-full border-b border-primary appearance-none rounded-none focus:border-white text-white bg-transparent py-2 placeholder:text-gray-300 outline-none focus:outline-none focus-visible:outline-none transition-all duration-300 ease-in-out',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
