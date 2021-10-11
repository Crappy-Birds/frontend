import Image from 'next/image'
import DrunkBird from '../../public/images/drunk-crappy-bird-02.png'
import { CgInfinity } from 'react-icons/cg'

const timeline = [
  {
    id: 1,
    title: 'Giveaways',
    content: 'Birds get airdropped to lucky holders',
    date: 'Q4 2021',
    datetime: '2020-09-20',
    percentage: '25%',
    iconBackground: 'bg-dark-400',
  },
  {
    id: 2,
    title: '???',
    content: '???',
    date: '???',
    datetime: '2020-09-22',
    percentage: '50%',
    iconBackground: 'bg-dark-400',
  },
  {
    id: 3,
    title: 'Exclusive Merch Store',
    content:
      'Crappy Birds Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.',
    date: 'Q4 2021',
    datetime: '2020-09-28',
    percentage: '75%',
    iconBackground: 'bg-dark-400',
  },
  {
    id: 4,
    //title: 'Fun-first blockchain MMO',
    //birds gives game access and serves as your avatar
    //'Think of Flappy Bird + Super Mario + Hollow Knight + Online Social features. Where your Crappy Bird gives you access to the game and serves as your avatar',
    title: 'Fun & Social MMO Game',
    content:
      'Where your Crappy Bird gives you access to the game and serves as your avatar',
    date: 'PLANNED',
    datetime: '2020-09-28',
    percentage: '100%',
    iconBackground: 'bg-dark-400',
  },
  {
    id: 5,
    title: 'The Future',
    content:
      //We keep the game up and roll new updates, and more to come
      //'Something missing? Got a great idea? We want you to help us make it happen.',
      'We keep the game up and running with new updates. And more to come ...',
    date: '& BEYOND',
    datetime: '2020-09-28',
    icon: CgInfinity,
    percentage: '',
    iconBackground: 'bg-dark-400',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Roadmap = ({}) => {
  return (
    <div className="py-16 overflow-hidden bg-dark-400 lg:py-24" id="roadmap">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center text-gray-50 sm:text-5xl">
          Roadmap
        </h2>
        {/* <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300 md:text-center md:text-lg">
          roadmap
        </p> */}
        <div className="flex flex-wrap items-center justify-center w-full mt-12">
          <div className="flow-root w-full px-0 sm:px-4 lg:w-1/2">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute w-1 h-full -ml-px bg-gray-200 top-12 left-12"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-center space-x-4">
                      <div
                        className={classNames(
                          event.iconBackground,
                          'h-24 w-24 rounded-full flex items-center justify-center ring-8 ring-transparent flex-col'
                        )}
                      >
                        {event.icon && (
                          <event.icon
                            className="w-10 h-10 text-white"
                            aria-hidden="true"
                          />
                        )}
                        <p className="text-lg italic font-semibold">
                          {event.percentage}
                        </p>
                      </div>
                      <div className="flex items-center justify-between flex-1 min-w-0 space-x-4">
                        <div>
                          <h6>{event.title}</h6>
                          <p className="text-base text-gray-300">
                            {event.content}
                          </p>
                        </div>
                        <div className="hidden text-sm text-right text-gray-100 whitespace-nowrap sm:block">
                          <p>{event.date}</p>
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
              alt="A drunk Crappy Bird is presenting the roadmap"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
