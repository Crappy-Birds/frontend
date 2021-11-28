import Image from 'next/image'
import HeroImage from '../../public/images/crappy-birds-in-the-nest.png'

const Hero = () => {
  return (
    <div className="relative h-full md:pb-4 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600">
      <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative w-full h-full shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <Image
            className="object-fill w-auto h-full objec md:object-cover"
            src={HeroImage}
            alt="Crappy Birds having fun in The Nest"
            width={1216}
            height={608}
            quality="100"
            layout="responsive"
            priority={true}
          />
          <div className="absolute inset-0 bg-gray-100 mix-blend-multiply" />
        </div>
      </div>
    </div>
  )
}

export default Hero
