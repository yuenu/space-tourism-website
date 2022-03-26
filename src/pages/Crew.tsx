import { useState } from 'react'
import clsx from 'clsx'
import DATA from '@/data.json'
import { Main } from '@/layouts'
import { Header, Heading } from '@/components'
import type { ICrew } from '@/types'

const CREW_DATA = DATA.crew

type IState = {
  iData: ICrew
  currentCrew: number
  setCurrentCrew: React.Dispatch<React.SetStateAction<number>>
}

function Container({ iData, currentCrew, setCurrentCrew }: IState) {
  return (
    <div>
      <Heading numero="02" title="Meet your crew" />
      <div
        className={clsx(
          'w-[90%] mx-auto relative mb-[4vh]',
          "before:content-[''] before:w-full before:h-[1px] before:bg-[#383B4B] before:absolute before:left-0 before:-bottom-[1px]"
        )}
      >
        <img
          src={iData.images.webp}
          className="h-[223px] mx-auto object-cover"
          alt={iData.name + ' photo'}
        />
      </div>

      <div className="w-full mb-[4vh] space-x-4">
        {CREW_DATA.map((_crew, index) => {
          return (
            <button
              key={index}
              className={clsx(
                'w-[10px] h-[10px] rounded-full',
                currentCrew === index ? 'bg-white' : 'bg-white/20'
              )}
              onClick={() => setCurrentCrew(index)}
              type="button"
            ></button>
          )
        })}
      </div>

      <div className="mb-[4vh] font-['Bellefair'] uppercase">
        <h4 className="mb-[1vh] text-xl text-white/50">{iData.role}</h4>
        <h2 className="text-3xl">{iData.name}</h2>
      </div>

      <p className="tracking-wider px-7 text-blue-lighter font-extralight">
        {iData.bio}
      </p>
    </div>
  )
}

export function Crew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onHamburgerButtonClick = () => setIsMenuOpen((prev) => !prev)
  const [currentCrew, setCurrentCrew] = useState(0)

  console.log(CREW_DATA)
  return (
    <Main className="bg-crew">
      <Header
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />
      <Container
        iData={CREW_DATA[currentCrew]}
        currentCrew={currentCrew}
        setCurrentCrew={setCurrentCrew}
      />
    </Main>
  )
}
