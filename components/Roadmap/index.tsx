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
    iconBackground: 'bg-brand-800',
  },
  {
    id: 1,
    title: 'Genesis NFT Drop',
    content: 'We launch our Genesis NFT sale',
    //content: 'We launch our Genesis NFT sale to raise funds to support the development of the game.',
    date: 'Q1 2022',
    percentage: '0%',
    iconBackground: 'bg-brand-800',
  },
  {
    id: 2,
    title: 'Get the ball rolling',
    content: 'Game development continues',
    date: 'Q1 2022',
    percentage: '10%',
    iconBackground: 'bg-brand-800',
  },
  {
    id: 3,
    title: 'Giveaways',
    content: 'Birds get airdropped to the community',
    date: 'Q1 2022',
    percentage: '25%',
    iconBackground: 'bg-brand-800',
  },
  {
    id: 4,
    title: '???',
    content: '???',
    date: '???',
    percentage: '???',
    iconBackground: 'bg-brand-800',
  },
  {
    id: 5,
    //title: 'Fun-first blockchain MMO',
    //birds gives game access and serves as your avatar
    //'Think of Flappy Bird + Super Mario + Hollow Knight + Online Social features. Where your Crappy Bird gives you access to the game and serves as your avatar',
    //Fun & Social first Online Game with play-and-earn mechanics.
    title: 'Crappy Birds Online - Release',
    content:
      'Fun & Social MMO Game leveraging NFTs and play-and-earn mechanics.',
    date: 'PLANNED',
    percentage: '100%',
    iconBackground: 'bg-brand-800',
  },
  {
    id: 6,
    //title: 'The Future',
    title: 'Keep the ball rolling',
    content:
      //We keep the game up and roll new updates, and more to come
      //'Something missing? Got a great idea? We want you to help us make it happen.',
      //Keep the ball rolling - Game maintenace and updates, DAO, Events ...
      //'We keep the game up and running with new updates. And more to come ...',
      'Game maintenance, Game updates, Exclusive Merch, Events and more to come ...',
    date: '& BEYOND',
    icon: CgInfinity,
    percentage: '',
    iconBackground: 'bg-brand-800',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Roadmap = ({}) => {
  return (
    <div
      className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-brand-800 to-dark-500"
      id="roadmap"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center text-gray-50 sm:text-5xl">
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
                        className="absolute w-1 h-full -ml-px bg-gray-400 top-12 left-12"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-center space-x-4">
                      <div
                        //className="flex flex-col items-center justify-center w-24 h-24 border-8 border-black border-opacity-25 rounded-full bg-dark-400 ring-8 ring-transparent"
                        className={classNames(
                          milestone.iconBackground,
                          'h-24 w-24 rounded-full flex items-center justify-center ring-8 ring-transparent flex-col'
                        )}
                      >
                        {milestone.icon && (
                          <milestone.icon
                            className="w-10 h-10 text-white"
                            aria-hidden="true"
                          />
                        )}
                        <p className="text-lg italic font-semibold">
                          {milestone.percentage}
                        </p>
                      </div>
                      <div className="flex items-center justify-between flex-1 min-w-0 space-x-4">
                        <div>
                          <h3 className="text-lg font-semibold md:text-xl">
                            {milestone.title}
                          </h3>
                          <p className="text-base text-gray-300">
                            {milestone.content}
                          </p>
                        </div>
                        <div className="hidden text-sm text-right text-gray-100 whitespace-nowrap sm:block">
                          <p>{milestone.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* <span className="pt-4 text-sm text-gray-400">
              Note: A fully fledged roadmap will be released after the sale.
            </span> */}
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              className="relative mx-auto"
              src={DrunkBird}
              alt="A drunk Crappy Bird is presenting the roadmap"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
