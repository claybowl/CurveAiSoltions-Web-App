'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { DesignSystemUtility } from '../../helpers/utility'

type Props = {
  href: string
  children: ReactNode
  active?: boolean
  className?: string
  target?: '_blank'
}

export function LandingNavBarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={DesignSystemUtility.buildClassNames(
        'text-lg flex items-center justify-center   leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-white dark:hover:text-black hover:text-black text-muted dark:text-muted-dark',
        (active || pathname?.includes(href)) &&
          'bg-gray-100 dark:bg-neutral-800 text-black',
        className,
      )}
      target={target}
    >
      {children}
    </Link>
  )
}
