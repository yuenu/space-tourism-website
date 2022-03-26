import { Icon } from '.'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

const navigationItems = [
  {
    id: '00',
    name: 'Home',
    link: '/'
  },
  {
    id: '01',
    name: 'Destination',
    link: '/destination'
  },
  {
    id: '02',
    name: 'Crew',
    link: '/crew'
  },
  {
    id: '03',
    name: 'Technology',
    link: '/technology'
  }
]

type NavigationProp = {
  isMenuOpen: boolean
}

function Navigation({ isMenuOpen }: NavigationProp) {
  const location = useLocation()
  return (
    <nav
      className={clsx(
        'z-10 fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-[81.5485px] transition-[right]',
        !isMenuOpen && '-right-full'
      )}
    >
      <ul className="mt-[16vh] text-xl text-white pl-10 space-y-8 uppercase text-left">
        {navigationItems.map((item) => {
          return (
            <li
              key={item.id}
              className={clsx(
                'relative',
                location.pathname === item.link &&
                  "before:content-[''] before:absolute before:h-full before:w-1 before:bg-white before:right-[1px] before:top-0"
              )}
            >
              <Link to={item.link} className="inline-block w-full font-normal">
                <span className="mr-4 font-bold">{item.id}</span>
                {item.name}
              </Link>
            </li>
          )
        })}
        {/* <li
          className={clsx(
            'relative',
            "before:content-[''] before:absolute before:h-full before:w-1 before:bg-white before:right-0 before:top-0"
          )}
        >
          <Link to="/" className="font-normal">
            <span className="mr-4 font-bold">00</span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/destination" className="font-normal">
            <span className="mr-4 font-bold">01</span>
            Destination
          </Link>
        </li>
        <li>
          <Link to="/crew" className="font-normal">
            <span className="mr-4 font-bold">02</span>
            Crew
          </Link>
        </li>
        <li>
          <Link to="/technology" className="font-normal">
            <span className="mr-4 font-bold">03</span>
            Technology
          </Link>
        </li> */}
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
