import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-11 w-full rounded-xl border border-ui-border bg-white px-4 text-sm text-ui-text shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[rgba(239,127,60,0.45)]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
