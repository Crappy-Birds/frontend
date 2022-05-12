import { HiCheck } from 'react-icons/hi'

const benefits = [
  {
    name: 'Exclusive In-Game Rewards',
    description: 'Receive exclusive items to set you apart in-game',
  },
  {
    name: 'Early-Access',
    description: 'Get closer to the devs and be the first to try out the game',
  },
  {
    name: 'Whitelist Pass',
    description: 'Secure your spot for future drops (e.g. IDO, Plot sale)',
  },
  {
    name: 'Community Membership',
    description:
      'Access to private Discord channels, get development insights from the team before everyone',
  },
  {
    name: 'A crappy profile picture',
    description:
      'Show off your bad taste, with a crappy pixel art bird profile picture',
  },
  {
    name: 'Crappy Birds Figurine',
    description: 'Claim a physical Crappy Birds Figurine, limited edition',
  },
]

const Benefits = () => {
  return (
    <div className="pb-16 overflow-hidden lg:pb-24 bg-gradient-to-b from-[#FFFBF3] to-[#FFFBF3]">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-base font-semibold tracking-wide uppercase text-brand-500">
            Welcome to The Nest
          </h3>
          <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
            Genesis&apos; holders benefits
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Holding a Crappy Bird grants an exclusive access to The Nest and
            many perks that will be unlocked through time.
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
