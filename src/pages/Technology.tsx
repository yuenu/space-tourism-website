import { useState } from 'react'
import clsx from 'clsx'
import DATA from '@/data.json'
import { Main } from '@/layouts'
import { Header, Heading } from '@/components'
import type { ITechnology } from '@/types'

const TECH_DATA = DATA.technology

type IState = {
  iData: ITechnology
  currentTech: number
  setCurrentTech: React.Dispatch<React.SetStateAction<number>>
}

function Container({ iData, currentTech, setCurrentTech }: IState) {
  return (
    <div>
      <Heading numero="03" title="SPACE LAUNCH 101" />
      <div
        className="bg-no-repeat w-full h-[190px] bg-cover mb-8"
        style={{
          backgroundImage: `url(${iData.images.portrait})`,
          backgroundPosition: 'center -180px'
        }}
      ></div>

      <div className="mb-8 space-x-4">
        {TECH_DATA.map((_tech, index) => {
          return (
            <button
              onClick={() => setCurrentTech(index)}
              key={index}
              className={clsx(
                'w-12 h-12 font-medium border rounded-full',
                currentTech === index
                  ? 'text-[#0B0D17] bg-white border-white/25'
                  : 'text-white bg-transparent border-white/25'
              )}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      <div className="mb-[4vh] font-['Bellefair'] uppercase">
        <h4 className="mb-[1vh] text-xl text-white/50">THE TERMINOLOGY…</h4>
        <h2 className="text-3xl">{iData.name}</h2>
      </div>

      <p className="px-6 font-light text-blue-lighter">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{iData.description}
      </p>
    </div>
  )
}

export function Technology() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onHamburgerButtonClick = () => setIsMenuOpen((prev) => !prev)

  const [currentTech, setCurrentTech] = useState(0)

  return (
    <Main className="bg-technology">
      <Header
        isMenuOpen={isMenuOpen}
        onHamburgerButtonClick={onHamburgerButtonClick}
      />
      <Container
        iData={TECH_DATA[currentTech]}
        currentTech={currentTech}
        setCurrentTech={setCurrentTech}
      />
    </Main>
  )
}
