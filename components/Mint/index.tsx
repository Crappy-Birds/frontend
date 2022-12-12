import Image from 'next/image'
import { useState } from 'react'
import DrunkBird from '../../public/images/drunk-crappy-bird-01.png'
import Background from '../../public/images/bg_iridescent.jpg'
import RandomThumbnail from '../../public/images/random-crappy-birds.png'

const Mint = () => {
  //const mintPrice = 800 // 0.06 ETH
  //const maxMint = 5
  const [birdAmount, setBirdAmount] = useState<number>()

  const handleBirdAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = Number(event.target.value)
    if (amount > 0) setBirdAmount(amount)
  }

  return (
    <div className="relative overflow-hidden" id="mint">
      <div className="absolute inset-0 z-[-1] min-w-full min-h-full">
        <div className="relative w-full h-full">
          <Image
            src={Background}
            alt=""
            layout="fill"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="z-10 py-16 overflow-hidden bg-opacity-50 lg:py-24 bg-gray-50 backdrop-filter backdrop-blur-md">
        <div className="z-20 max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-3xl italic font-extrabold leading-8 tracking-tight uppercase md:text-center sm:text-5xl">
            Get a Crappy Bird
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-700 md:text-center">
            Birds of a feather, you know ...
          </p>
          <div className="flex flex-wrap items-center px-4 mt-12 sm:px-0">
            <div className="w-full lg:w-1/2">
              <Image
                className="relative mx-auto"
                src={DrunkBird}
                alt="Drunk Crappy Bird showing the mint form"
              />
            </div>

            <div className="flex flex-col justify-between w-full h-auto px-0 text-center lg:w-1/2 sm:px-8 md:-mx-4">
              <div className="flex flex-col content-start w-full h-full p-4 space-y-4 text-left bg-gray-100 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-sm border-brand-500 md:p-8 rounded-xl">
                <h3 className="text-xl italic text-gray-800 md:text-3xl">
                  Join The Nest
                </h3>
                <p className="text-gray-800">
                  Enter the amount of birds you would like to mint.
                </p>
                <div className="flex flex-row items-center justify-between px-4 py-8 bg-gray-400 rounded-lg bg-opacity-10">
                  <div className="hidden md:inline">
                    <Image
                      className="relative mx-auto rounded-lg bg-brand-500"
                      src={RandomThumbnail}
                      alt=""
                    />
                  </div>
                  <div className="text-gray-700 md:content-end md:text-right">
                    <p className="text-lg font-medium">Price per Crappy Bird</p>
                    <p className="text-2xl italic font-bold">
                      <span className="text-brand-600">
                        {/* {mintPrice / 10000} */}
                        ???
                      </span>{' '}
                      ETH Each
                    </p>
                    <p className="text-lg text-gray-800">3,000 remaining</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="mint-amount"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Mint amount
                      </label>
                      <span className="text-sm text-gray-700">
                        Limited to {/* {maxMint} */}??? per user
                      </span>
                    </div>
                    <input
                      type="number"
                      min={1}
                      //max={maxMint}
                      step={1}
                      name="mint-amount"
                      id="mint-amount"
                      value={birdAmount}
                      onChange={(e) => handleBirdAmountChange(e)}
                      className="block w-full h-12 text-gray-700 bg-gray-400 border-gray-500 border-opacity-0 rounded-md shadow-sm border-1 peer bg-opacity-10 out-of-range:border-opacity-100 out-of-range:border-red-500 focus:out-of-range:border-red-500 focus:ring-0 focus:border-brand-500 sm:text-sm"
                      placeholder="0"
                    />
                    <p
                      className="hidden mt-2 text-sm text-red-600 peer-out-of-range:inline"
                      id="email-error"
                    >
                      Mint amount out of range.
                    </p>
                  </div>
                  {birdAmount && (
                    <div className="flex justify-between text-gray-700 transition-all duration-700">
                      <p className="text-lg font-bold uppercase sm:text-2xl">
                        Total :
                      </p>
                      <p className="text-lg font-bold uppercase sm:text-2xl">
                        {/* {(birdAmount * mintPrice) / 10000} */}??? ETH
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-base italic font-bold text-white uppercase border border-transparent rounded-md shadow-sm disabled:cursor-not-allowed disabled:opacity-50 bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                    disabled={true}
                  >
                    Connect Wallet - Coming Soon
                  </button>
                </div>
              </div>
              {/* <span className="pt-4 text-sm text-gray-600">
                Note: Fifty birds are being withheld from the sale. These will
                be used for giveaways, events — and for the team
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
