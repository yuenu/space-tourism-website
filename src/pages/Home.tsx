import { useState } from 'react'
import { Header } from '@/components'
import { Main } from '@/layouts'
import clsx from 'clsx'

function Content() {
  /**
   *  - Content
   *    - Heading
   *    - Description
   *
   */
  return (
    <div
      className={clsx(
        'px-6 text-center text-blue-lighter',
        'lg:mt-auto lg:ml-[10vw] lg:text-left lg:max-w-[450px] lg:px-0'
      )}
    >
      <div className={clsx('lg:flex flex-col')}>
        <span
          className={clsx(
            'tracking-[2.7px]',
            'lg:text-[28px] lg:tracking-[4.725px]'
          )}
        >
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h2
          className={clsx(
            "font-['Bellefair'] text-[80px] leading-relaxed inline-block text-white",
            'lg:text-[150px] lg:leading-[172px] lg:relative lg:right-2'
          )}
        >
          SPACE
        </h2>
      </div>
      <p
        className={clsx(
          'leading-[25px]',
          'lg:leading-[32px] lg:text-[18px] lg:tracking-wider lg:pr-[22px]'
        )}
      >
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
    <div
      className={clsx(
        'flex items-center justify-center w-[50vw] h-[50vw] mx-auto text-black bg-white rounded-full shadow-lg shadow-[#0B0D19]',
        'lg:w-[274px] lg:h-[274px] lg:mt-auto lg:relative lg:left-40'
      )}
    >
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
    <Main className="h-screen bg-home lg:bg-home-desktop">
      <Header
        onHamburgerButtonClick={onHamburgerButtonClick}
        isMenuOpen={isMenuOpen}
      />
      <div
        className={clsx(
          'flex flex-col h-[calc(100vh-80px)] justify-evenly',
          'lg:flex-row lg:pb-[20vh]'
        )}
      >
        <Content />
        <ExploreAction />
      </div>
    </Main>
  )
}
