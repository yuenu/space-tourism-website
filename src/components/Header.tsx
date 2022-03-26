import { Icon } from '.'
import clsx from 'clsx'

// const navData = [
//   {
//     id: '00',
//     name: 'Home'
//   },
//   {
//     id: '01',
//     name: 'Destination'
//   },
//   {
//     id: '02',
//     name: 'Destination'
//   },
//   {
//     id: '03',
//     name: 'Destination'
//   }
// ]

type NavigationProp = {
  isMenuOpen: boolean
}

function Navigation({ isMenuOpen }: NavigationProp) {
  return (
    <nav
      className={clsx(
        'z-10 fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-[81.5485px] transition-[right]',
        !isMenuOpen && '-right-full'
      )}
    >
      <ul className="mt-[16vh] text-xl text-white pl-10 space-y-8 uppercase">
        <li
          className={clsx(
            'relative',
            "before:content-[''] before:absolute before:h-full before:w-1 before:bg-white before:right-0 before:top-0"
          )}
        >
          <a href="#" className="font-normal">
            <span className="mr-4 font-bold">00</span>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="font-normal">
            <span className="mr-4 font-bold">01</span>
            Destination
          </a>
        </li>
        <li>
          <a href="#" className="font-normal">
            <span className="mr-4 font-bold">02</span>
            Crew
          </a>
        </li>
        <li>
          <a href="#" className="font-normal">
            <span className="mr-4 font-bold">03</span>
            Technology
          </a>
        </li>
      </ul>
    </nav>
  )
}

type HamburgerMenuProp = {
  onHamburgerButtonClick: React.MouseEventHandler<HTMLButtonElement>
  isMenuOpen: boolean
}

function HamburgerMenu({
  onHamburgerButtonClick,
  isMenuOpen
}: HamburgerMenuProp) {
  return (
    <button
      aria-controls="primary-controls"
      onClick={onHamburgerButtonClick}
      className="z-10"
    >
      {isMenuOpen ? <Icon.Close /> : <Icon.Hamburger />}
    </button>
  )
}

type HeaderProp = {
  onHamburgerButtonClick: React.MouseEventHandler<HTMLButtonElement>
  isMenuOpen: boolean
}

export function Header({ onHamburgerButtonClick, isMenuOpen }: HeaderProp) {
  /**
   * - Header
   *   - Logo
   *   - Navigation
   *     - Navigation-item
   *
   */
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <Icon.Logo viewBox="0 0 60 50" className="w-10" />
      <Navigation isMenuOpen={isMenuOpen} />
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />
    </div>
  )
}
