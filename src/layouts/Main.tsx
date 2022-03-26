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
        `min-h-screen w-screen bg-cover bg-no-repeat text-white text-center pb-20`,
        className
      )}
    >
      {children}
    </main>
  )
}
