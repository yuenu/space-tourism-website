import { useState } from 'react'
import { Main } from '@/layouts'
import { Header, Heading } from '@/components'

function Container() {
  return (
    <div>
      <Heading numero="03" title="SPACE LAUNCH 101" />
    </div>
  )
}

export function Technology() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onHamburgerButtonClick = () => setIsMenuOpen((prev) => !prev)

  return (
    <Main className="bg-technology">
      <Header
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />
      <Container />
    </Main>
  )
}
