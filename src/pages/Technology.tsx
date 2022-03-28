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
  className?: string
}

function DesktopContainer({
  iData,
  currentTech,
  setCurrentTech,
  className
}: IState) {
  return (
    <div
      className={clsx(
        'w-full text-left relative h-[calc(100vh-136px)]',
        className
      )}
    >
      <div className="flex flex-col flex-1 pl-[13vw] pt-[10vh]">
        <Heading numero="03" title="SPACE LAUNCH 101" />

        <div className="flex gap-32">
          <div className="flex flex-col mb-8 gap-[3vh]">
            {TECH_DATA.map((_tech, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setCurrentTech(index)}
                  className={clsx(
                    'w-[80px] h-[80px] font-medium border rounded-full transition',
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

          <div>
            <div className="mb-[4vh] font-['Bellefair'] uppercase">
              <h4 className="mb-[1vh] text-blue-lighter">THE TERMINOLOGY…</h4>
              <h2 className="text-[56px]">{iData.name}</h2>
            </div>

            <p className="font-light text-blue-lighter max-w-[400px] leading-[32px] tracking-wider text-lg">
              {iData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end flex-1">
        <div
          className="bg-no-repeat w-[80%] h-[60vh] bg-cover mb-8"
          style={{
            backgroundImage: `url(${iData.images.portrait})`
          }}
        ></div>
      </div>
    </div>
  )
}

function MobileContainer({
  iData,
  currentTech,
  setCurrentTech,
  className
}: IState) {
  return (
    <div
      className={clsx(
        'flex flex-col h-[calc(100vh-80px)] justify-evenly',
        className
      )}
    >
      <Heading numero="03" title="SPACE LAUNCH 101" />
      <div
        className="bg-no-repeat w-full h-[30vh] bg-cover mb-8"
        style={{
          backgroundImage: `url(${iData.images.portrait})`,
          backgroundPosition: 'center -180px'
        }}
      ></div>

      <div className="mb-8 space-x-4">
        {TECH_DATA.map((_tech, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentTech(index)}
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
      <DesktopContainer
        className="hidden md:flex"
        iData={TECH_DATA[currentTech]}
        currentTech={currentTech}
        setCurrentTech={setCurrentTech}
      />
      <MobileContainer
        className="md:hidden"
        iData={TECH_DATA[currentTech]}
        currentTech={currentTech}
        setCurrentTech={setCurrentTech}
      />
    </Main>
  )
}
