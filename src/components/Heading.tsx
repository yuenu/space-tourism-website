import clsx from 'clsx'

type Props = {
  numero: string
  title: string
  className?: string
}

export function Heading({ numero, title, className }: Props) {
  return (
    <h1
      className={clsx(
        'mb-8 tracking-[0.25rem] uppercase font-extralight',
        'lg:text-[28px] lg:mb-[10vh]',
        className
      )}
    >
      <span className="mr-4 font-medium opacity-25">{numero}</span>
      {title}
    </h1>
  )
}
