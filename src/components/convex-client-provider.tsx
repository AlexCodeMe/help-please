'use client'

import { ReactNode } from 'react'
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ClerkProvider, SignIn, useAuth } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className='flex flex-col items-center justify-center min-h-screen'>
            <SignIn routing='hash' />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <div className='min-h-screen flex flex-col items-center justify-center gap-2'>
            <Loader className='animate-spin size-6 text-mtued-foreground' />
            <p className='text-sm text-muted-foreground'>Auth Loading...</p>
          </div>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
