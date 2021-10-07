import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-full md:pb-4">
      {/* <div className="absolute inset-x-0 bottom-0 bg-dark-400 h-1/3" /> */}
      <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative w-full h-full shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <Image
            /* className="object-cover w-full h-full" */
            className="object-fill w-auto h-full objec md:object-cover"
            src="/images/illus_sketch_02.png"
            alt="Crappy Birds having fun in The Nest"
            /* width={1529}
            height={775} */
            width={1440}
            height={720}
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
