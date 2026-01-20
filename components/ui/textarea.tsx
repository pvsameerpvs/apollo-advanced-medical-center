import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'min-h-[110px] w-full rounded-xl border border-ui-border bg-white px-4 py-3 text-sm text-ui-text shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[rgba(239,127,60,0.45)]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'
