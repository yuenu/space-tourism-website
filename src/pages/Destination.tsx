import { useState } from 'react'
import { Header } from '@/components'
import DATA from '@/data.json'
import { DESTINATION_ITEMS } from '@/constant'
import clsx from 'clsx'

type IState = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

function Container({
  iData,
  currentPlanet,
  setCurrentPlanet
}: {
  iData: IState
  currentPlanet: number
  setCurrentPlanet: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className="text-center text-white">
      <h1 className="mb-8 tracking-widest uppercase">
        <span className="mr-4 opacity-25">01</span>Pick your destination
      </h1>
      <img src={iData.images.webp} className="w-1/2 mx-auto mb-6 plant" />
      <ul className="flex justify-center gap-6 mb-8 uppercase">
        {DESTINATION_ITEMS.map((item, index) => (
          <li
            onClick={() => setCurrentPlanet(index)}
            key={item.id}
            className={clsx(
              'relative',
              index === currentPlanet &&
                "before:content-[''] before:w-full before:h-[3px] before:bg-white before:absolute before:-bottom-2 before:left-0"
            )}
          >
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
      <h2 className="font-['Bellefair'] text-6xl uppercase">{iData.name}</h2>
      <p className="my-6 font-light px-9 text-blue-lighter">
        {iData.description}
      </p>
    </div>
  )
}

function Details({ iData }: { iData: IState }) {
  return (
    <div className="text-center text-white uppercase">
      <div className="w-5/6 h-[1px] mx-auto bg-[#383B4B] mb-6"></div>
      <div className="mb-6 space-y-2">
        <strong className="text-blue-lighter">AVG. DISTANCE</strong>
        <p className="text-[28px] font-['Bellefair']">{iData.distance}</p>
      </div>
      <div className="pb-10 space-y-2">
        <strong className="text-blue-lighter">Est. travel time</strong>
        <p className="text-[28px] font-['Bellefair']">{iData.travel}</p>
      </div>
    </div>
  )
}

type Plants = 'MOON' | 'MARS' | 'EUROPA' | 'TITAN'

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

  const destinationData = DATA.destinations
  return (
    <div className="min-h-screen w-screen bg-cover bg-no-repeat bg-[url('src/assets/destination/background-destination-mobile.jpg')]">
      <Header
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />

      <Container
        currentPlanet={currentPlanet}
        setCurrentPlanet={setCurrentPlanet}
        iData={destinationData[currentPlanet]}
      />
      <Details iData={destinationData[currentPlanet]} />
    </div>
  )
}
