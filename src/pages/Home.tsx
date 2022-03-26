import { useState } from 'react'
import { Header } from '@/components'
import { Main } from '@/layouts'

function Content() {
  /**
   *  - Content
   *    - Heading
   *    - Description
   *
   */
  return (
    <div className="px-6 text-center text-blue-lighter">
      <div>
        <span className="tracking-[2.7px]">SO, YOU WANT TO TRAVEL TO</span>
        <h2 className="font-['Bellefair'] text-[80px] leading-relaxed inline-block text-white">
          SPACE
        </h2>
      </div>
      <p className="leading-[25px]">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  )
}

function ExploreAction() {
  return (
    <div className="flex items-center justify-center w-[50vw] h-[50vw] mx-auto text-black bg-white rounded-full">
      <span className="font-['Bellefair'] text-2xl uppercase">Explore</span>
    </div>
  )
}

export function Home() {
  /**
   * - Header
   *   - Logo
   *   - Navigation
   *     - Navigation-item
   *
   *  - Content
   *    - Heading
   *    - Description
   *
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onHamburgerButtonClick = () => setIsMenuOpen((prev) => !prev)

  return (
    <Main className="bg-home">
      <Header
        onHamburgerButtonClick={onHamburgerButtonClick}
        isMenuOpen={isMenuOpen}
      />
      <div className="flex flex-col h-[calc(100vh-80px)] justify-evenly">
        <Content />
        <ExploreAction />
      </div>
    </Main>
  )
}
