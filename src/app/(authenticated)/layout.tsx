'use client'

import { useUserContext } from '@/core/context'
import { MrbSplashScreen } from '@/designSystem'
import { NavigationLayout } from '@/designSystem/layouts/NavigationLayout'
import { NavigationItem } from '@/designSystem/layouts/NavigationLayout/types/NavigationItem'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

type Props = { children: ReactNode; items: NavigationItem[] }

export default function AuthenticatedLayout({ children }: Props) {
  const { isLoggedIn, isLoading } = useUserContext()

  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login')
    }
  }, [isLoading, isLoggedIn])

  if (isLoading) {
    return <MrbSplashScreen />
  }

  if (isLoggedIn) {
    const navigationItems: NavigationItem[] = [
      {
        key: '/home',
        label: 'Landing Page',
        onClick: () => router.push('/home'),
      },
      {
        key: '/membership',
        label: 'Membership Page',
        onClick: () => router.push('/membership'),
      },
      {
        key: '/services',
        label: 'Services Page',
        onClick: () => router.push('/services'),
      },
      {
        key: '/assessment',
        label: 'AI Readiness Assessment Page',
        onClick: () => router.push('/assessment'),
      },
      {
        key: '/communication',
        label: 'Communication Page',
        onClick: () => router.push('/communication'),
      },
      {
        key: '/admin',
        label: 'Admin Dashboard',
        onClick: () => router.push('/admin'),
      },
      {
        key: '/developer',
        label: 'Developer Dashboard',
        onClick: () => router.push('/developer'),
      },
      {
        key: '/prototypes',
        label: 'Prototypes',
        onClick: () => router.push('/prototypes'),
      },
    ]

    return <NavigationLayout>{children}</NavigationLayout>
  }

  return null
}
