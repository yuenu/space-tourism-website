import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export function Main({ children, className }: Props) {
  return (
    <main
      className={clsx(
        'min-h-screen w-full bg-cover bg-no-repeat text-white text-center pb-20',
        'md:h-screen md:overflow-hidden',
        className
      )}
    >
      {children}
    </main>
  )
}
