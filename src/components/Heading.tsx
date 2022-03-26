type Props = {
  numero: string
  title: string
}

export function Heading({ numero, title }: Props) {
  return (
    <h1 className="mb-8 tracking-[0.25rem] uppercase">
      <span className="mr-4 opacity-25">{numero}</span>
      {title}
    </h1>
  )
}
