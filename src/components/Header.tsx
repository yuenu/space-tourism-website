import { Icon } from '.'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '@/constant'

type NavigationProp = {
  isMenuOpen: boolean
  className?: string
}

function DesktopNavigation({ className }: { className: string }) {
  const location = useLocation()
  return (
    <nav className={clsx('w-full items-center', className)}>
      <div className="w-[30%] h-[1px] bg-white/25 z-10 relative left-4"></div>
      <ul className="w-[70%] bg-white/5 backdrop-blur-[81.5485px] h-24 flex items-center gap-20 text-[18px] pl-[10vw] uppercase">
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <li
              key={item.id}
              className={clsx(
                'relative transition',
                location.pathname === item.link &&
                  "before:content-[''] before:absolute before:-bottom-[33px] before:w-full before:h-[2px] before:bg-white"
              )}
            >
              <Link to={item.link} className="font-extralight">
                <span className="mr-2 font-medium">{item.id}</span>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function MobileNavigation({ isMenuOpen, className }: NavigationProp) {
  const location = useLocation()
  return (
    <nav
      className={clsx(
        'z-10 fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-[81.5485px] transition-[right]',
        !isMenuOpen && '-right-full',
        className
      )}
    >
      <ul className="mt-[16vh] text-xl text-white pl-10 space-y-8 uppercase text-left">
        {NAVIGATION_ITEMS.map((item) => {
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
      </ul>
    </nav>
  )
}

type HamburgerMenuProp = {
  onHamburgerButtonClick: React.MouseEventHandler<HTMLButtonElement>
  isMenuOpen: boolean
  className?: string
}

function HamburgerMenu({
  onHamburgerButtonClick,
  isMenuOpen,
  className
}: HamburgerMenuProp) {
  return (
    <>
      <button
        aria-controls="primary-controls"
        onClick={onHamburgerButtonClick}
        className={clsx('z-20', className)}
      >
        {isMenuOpen ? <Icon.Close /> : <Icon.Hamburger />}
      </button>
      <MobileNavigation isMenuOpen={isMenuOpen} />
    </>
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
    <div
      className={clsx(
        'flex items-center justify-between px-6 py-4',
        'lg:pt-[40px] lg:pl-[55px] lg:p-0 lg:h-[136px]'
      )}
    >
      <div className="w-10 lg:w-[48px]">
        <Icon.Logo viewBox="0 0 60 50" className="w-full h-full" />
      </div>
      <HamburgerMenu
        className="md:hidden"
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />
      <DesktopNavigation className={clsx('hidden md:flex')} />
    </div>
  )
}
