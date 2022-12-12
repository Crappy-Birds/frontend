import Image from 'next/image'
import HeroImage from '../../public/images/crappy-birds-in-the-nest.jpg'

const Hero = () => {
  return (
    <div className="relative h-full md:pb-4 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-500">
      <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="aspect-w-2 aspect-h-1">
          <div className="block shadow-2xl sm:overflow-hidden sm:rounded-2xl">
            <Image
              className=""
              src={HeroImage}
              alt="Crappy Birds having fun in The Nest"
              placeholder="blur"
              quality={100}
              layout="responsive"
              objectPosition="center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
