'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'
    
    // Cloud-like border radius using custom CSS
    const cloudShape = 'cloud-shape'
    
    const variants = {
      primary: 'bg-gradient-to-br from-blue-200 via-white to-blue-100 text-blue-800 shadow-lg hover:shadow-xl hover:from-blue-300 hover:via-blue-50 hover:to-blue-200 focus:ring-blue-400 border border-blue-200/50',
      secondary: 'bg-gradient-to-br from-gray-200 via-white to-gray-100 text-gray-800 shadow-lg hover:shadow-xl hover:from-gray-300 hover:via-gray-50 hover:to-gray-200 focus:ring-gray-400 border border-gray-200/50',
      ghost: 'bg-gradient-to-br from-transparent via-white/20 to-transparent text-gray-700 hover:from-white/30 hover:via-white/40 hover:to-white/30 focus:ring-gray-400 border border-gray-200/30',
      outline: 'bg-gradient-to-br from-blue-50 via-white to-blue-50 text-blue-600 hover:from-blue-100 hover:via-blue-50 hover:to-blue-100 focus:ring-blue-400 border-2 border-blue-300',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm min-w-[80px] min-h-[36px]',
      md: 'px-6 py-3 text-sm min-w-[100px] min-h-[44px]',
      lg: 'px-8 py-4 text-base min-w-[120px] min-h-[52px]',
    }

    return (
      <button
        className={cn(
          baseClasses,
          cloudShape,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Cloud texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cloudFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cloudFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Floating cloud particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 bg-white/30 rounded-full blur-sm top-1/4 left-1/4 animate-pulse" />
          <div className="absolute w-2 h-2 bg-white/40 rounded-full blur-sm top-3/4 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute w-2.5 h-2.5 bg-white/25 rounded-full blur-sm bottom-1/4 left-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center">
          {loading && (
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
