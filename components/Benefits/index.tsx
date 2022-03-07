import { HiCheck } from 'react-icons/hi'

const benefits = [
  {
    name: 'Exclusive In-Game Rewards',
    description:
      'You will receive exclusive in-game rewards, such as cosmectics items and title.',
  },
  {
    name: 'Early-Access',
    description:
      'Be the first to try out the game and get involved by getting access to DEV, ALPHA & BETA builds',
  },
  {
    name: 'Whitelist Pass',
    description:
      'Holding a Genesis Crappy Bird grants you a whitelist spot for future drop. (e.g. IDO, Plot sale)',
  },
  {
    name: 'Community Membership',
    description:
      'Access to private Discord channels and get development insights from the team before anyone else.',
  },
  {
    name: 'A crappy profile picture',
    description:
      'Using your Crappy Bird as profile picture might be a good way to show off your bad taste.',
  },
  {
    name: 'Crappy Birds Figurine',
    description:
      'A snapshot will be taken at some point, holders from that date will then be able to claim a physical Crappy Birds Figurine.',
  },
]

const Benefits = () => {
  return (
    <div className="pb-16 overflow-hidden lg:pb-24 bg-gradient-to-b from-[#FFFBF3] to-[#FFFBF3]">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-base font-semibold tracking-wide uppercase text-brand-500">
            Genesis&apos; holders benefits
          </h3>
          <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
            Welcome to The Nest
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Holding a Crappy Bird grants an exclusive access to The Nest and
            many perks that will be unlocked through the roadmap.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="relative">
              <dt>
                <HiCheck
                  className="absolute w-6 h-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="text-lg font-semibold leading-6 text-gray-800 ml-9">
                  {benefit.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-700 ml-9">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Benefits
