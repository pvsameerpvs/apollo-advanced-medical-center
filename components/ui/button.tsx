import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'default' | 'green' | 'outline' | 'ghost'
export type ButtonSize = 'default' | 'sm' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-brand-orange text-white hover:bg-[#e67234]',
  green: 'bg-brand-green text-white hover:bg-brand-greenDark',
  outline: 'border border-ui-border bg-white text-ui-text hover:bg-brand-orangeSoft',
  ghost: 'bg-transparent text-brand-green hover:bg-brand-orangeSoft',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-11 px-5',
  sm: 'h-10 px-4',
  lg: 'h-12 px-6 text-base',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(239,127,60,0.45)] disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
