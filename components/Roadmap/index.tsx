import Image from 'next/image'
import DrunkBird from '../../public/images/drunk-crappy-bird-02.png'
import { CgInfinity } from 'react-icons/cg'
import { HiFlag } from 'react-icons/hi'

const timeline = [
  {
    id: 0,
    title: 'Crappy Birds Online - Demo',
    content:
      'We publish a playable prototype of our game, accessible to everyone.',
    date: 'Q1 2022',
    percentage: '',
    icon: HiFlag,
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 1,
    title: 'Genesis NFT Drop',
    content: 'We launch our Genesis NFT sale.',
    date: 'Q1 2022',
    percentage: '0%',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 2,
    title: 'Get the ball rolling',
    content: 'Game development keeps going.',
    date: 'Q1 2022',
    percentage: '10%',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 3,
    title: 'Giveaways',
    content: 'Birds get airdropped to the community.',
    date: 'Q1 2022',
    percentage: '25%',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 4,
    title: 'More Giveaways',
    content: 'More birds get airdropped to the community.',
    date: 'Q2 2022',
    percentage: '50%',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 5,
    title: '???',
    content: '???',
    date: '???',
    percentage: '???',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 6,
    title: 'Crappy Birds Online - Release',
    content:
      'Fun & Social MMO Game leveraging NFTs and play-and-earn mechanics.',
    date: 'PLANNED',
    percentage: '100%',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
  {
    id: 7,
    title: 'Keep the ball rolling',
    content:
      'Game maintenance, Game updates, Exclusive Merch, Events and more to come ...',
    date: '& BEYOND',
    icon: CgInfinity,
    percentage: '',
    iconBackground: 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Roadmap = ({}) => {
  return (
    <div
      className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-[#FFFBF3] to-[#FFF8D2]"
      id="roadmap"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center sm:text-5xl">
          Roadmap
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full mt-12">
          <div className="flex flex-col justify-between w-full px-0 sm:px-4 lg:w-1/2">
            <ul className="-mb-8">
              {timeline.map((milestone, milestoneId) => (
                <li key={milestone.id}>
                  <div className="relative pb-8">
                    {milestoneId !== timeline.length - 1 ? (
                      <span
                        className="absolute w-1 h-8 -ml-px bg-black bg-opacity-20 top-24 left-12"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-center space-x-4">
                      <div
                        className={classNames(
                          milestone.iconBackground,
                          'h-24 w-24 rounded-full flex items-center justify-center ring-8 ring-transparent flex-col text-white'
                        )}
                      >
                        {milestone.icon && (
                          <milestone.icon
                            className="w-10 h-10 text-white"
                            aria-hidden="true"
                          />
                        )}
                        <p className="text-xl italic font-semibold text-white">
                          {milestone.percentage}
                        </p>
                      </div>
                      <div className="flex items-center justify-between flex-1 min-w-0 space-x-4">
                        <div>
                          <h3 className="text-lg font-semibold md:text-xl">
                            {milestone.title}
                          </h3>
                          <p className="text-base text-gray-700">
                            {milestone.content}
                          </p>
                        </div>
                        <div className="hidden text-sm font-medium text-right text-gray-900 whitespace-nowrap sm:block">
                          <p>{milestone.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              className="relative mx-auto"
              src={DrunkBird}
              placeholder="blur"
              alt="A drunk Crappy Bird is presenting the roadmap"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
