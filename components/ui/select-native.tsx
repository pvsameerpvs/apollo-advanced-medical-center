import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SelectNativeProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'h-11 w-full rounded-xl border border-ui-border bg-white px-4 text-sm text-ui-text shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[rgba(239,127,60,0.45)]',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
)
SelectNative.displayName = 'SelectNative'
