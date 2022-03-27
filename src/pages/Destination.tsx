import { useState } from 'react'
import clsx from 'clsx'
import DATA from '@/data.json'
import { Header, Heading } from '@/components'
import { DESTINATION_ITEMS } from '@/constant'
import { Main } from '@/layouts'
import { IDestination } from '@/types'

const destinationData = DATA.destinations

function Details({ iData }: { iData: IDestination }) {
  return (
    <div
      className={clsx('text-center text-white uppercase', 'lg:font-extralight')}
    >
      <div
        className={clsx(
          'w-5/6 h-[1px] mx-auto bg-[#383B4B] mb-6',
          'lg:w-[445px] lg:mx-0 lg:mb-12'
        )}
      ></div>
      <div className={clsx('lg:flex lg:gap-20 lg:text-left')}>
        <div className="mb-6 space-y-2">
          <strong className="text-blue-lighter">AVG. DISTANCE</strong>
          <p className="text-[28px] font-['Bellefair']">{iData.distance}</p>
        </div>
        <div className="pb-10 space-y-2">
          <strong className="text-blue-lighter">Est. travel time</strong>
          <p className="text-[28px] font-['Bellefair']">{iData.travel}</p>
        </div>
      </div>
    </div>
  )
}

function Container({
  iData,
  currentPlanet,
  setCurrentPlanet
}: {
  iData: IDestination
  currentPlanet: number
  setCurrentPlanet: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div
      className={clsx('text-center', 'lg:flex lg:mt-[10vh] lg:gap-x-[157px]')}
    >
      <div className={clsx('lg:flex-1')}>
        <Heading numero="01" title="Pick your destination" />
        <img
          src={iData.images.webp}
          className={clsx(
            'plant',
            'w-1/2 mx-auto mb-6',
            'lg:w-[55%] lg:relative lg:left-20'
          )}
        />
      </div>
      <div className={clsx('text-center', 'lg:flex-1 lg:text-left')}>
        <ul
          className={clsx(
            'flex justify-center gap-6 mb-8 uppercase',
            'lg:justify-start lg:mb-14 lg:gap-10'
          )}
        >
          {DESTINATION_ITEMS.map((item, index) => (
            <li
              onClick={() => setCurrentPlanet(index)}
              key={item.id}
              className={clsx(
                'relative cursor-pointer tracking-[0.18rem]',
                index === currentPlanet ? 'text-white' : 'text-blue-lighter',
                index === currentPlanet &&
                  "before:content-[''] before:w-full before:h-[3px] before:bg-white before:absolute before:-bottom-2 before:left-0 text-white"
              )}
            >
              <div>{item.name}</div>
            </li>
          ))}
        </ul>
        <h2
          className={clsx(
            "font-['Bellefair'] text-6xl uppercase",
            'lg:text-[100px]'
          )}
        >
          {iData.name}
        </h2>
        <p
          className={clsx(
            'my-6 font-light px-9 text-blue-lighter',
            'lg:px-0 lg:max-w-[445px] lg:text-[18px] lg:mb-12 lg:tracking-wide lg:leading-relaxed'
          )}
        >
          {iData.description}
        </p>
        <Details iData={destinationData[currentPlanet]} />
      </div>
    </div>
  )
}

export function Destination() {
  /**
   *  - Header
   *
   *  - Container
   *    - Heading
   *    - Earth photo
   *    - Menu chouce
   *    - Title
   *    - Description
   *
   *    - Details
   *      - Detail-title
   *      - Detail-content
   *
   */

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onHamburgerButtonClick = () => setIsMenuOpen((prev) => !prev)

  const [currentPlanet, setCurrentPlanet] = useState(0)

  return (
    <Main className="bg-destination lg:bg-destination-desktop">
      <Header
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />

      <Container
        currentPlanet={currentPlanet}
        setCurrentPlanet={setCurrentPlanet}
        iData={destinationData[currentPlanet]}
      />
    </Main>
  )
}
