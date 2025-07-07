'use client'

import { useEffect } from 'react'
import { Button } from '@/components/shadcn/button'
import { Card } from '@/components/shadcn/card'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="max-w-md w-full p-8 text-center space-y-6 shadow-xl">
        <div className="space-y-2">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            We encountered an unexpected error. Don't worry, it's not your fault.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={reset}
            className="w-full"
            variant="default"
          >
            Try again
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="w-full"
          >
            Go back home
          </Button>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <details className="text-left">
            <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              Technical details
            </summary>
            <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <code className="text-xs text-gray-700 dark:text-gray-300 break-all">
                {error.message}
              </code>
              {error.digest && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </details>
        </div>
      </Card>
    </div>
  )
}

export default ErrorPage