import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex h-screen bg-auto bg-dark-blue(main)'>
      <div className=' m-auto'>
        <div >

          {/* Background */}
          <div className=' w-64 h-fit bg-dark-blue(card) rounded-lg drop-shadow-2xl'>

            {/* Main card container */}
            <div className='flex flex-col p-4 justify-center items-center font-outfit'  >

              {/* Image */}
              <div className=' justify-center items-center'>
                <Image src="/image-equilibrium.jpg" width={215} height={215} className='rounded-lg' />
              </div>

              {/* Text */}
              <div className='flex flex-col justify-start px-2 space-y-2'>
                <p className='text-white mt-2 font-semibold'>Equilibrium #3429</p>
                <p className='text-xs text-soft-blue tracking-wide'>Our Equilibrium collection promotes balance and calm.</p>

                {/* Price and days left */}
                <div className='flex justify-between text-xs py-3'>
                  <div className='flex items-center '>
                    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                    <span className='mx-2 text-cyan(custom)'>0.041 ETH</span>
                  </div>
                  <div className='flex'>
                    <svg className='mx-1' width="17" height="17" xmlns="http://www.w3.org/2000/svg"> <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                    <span className='text-soft-blue'>3 days left</span>
                  </div>
                </div>

                {/* Line */}
                
                <hr className=' border-soft-blue'></hr>

                {/* Bottom portion */}
                <div className='flex justify-start items-center space-x-1 text-xs'>
                  <Image src='/viking.jpg' width={25} height={25} className='rounded-3xl' />
                  <p className='text-soft-blue pl-2'>Creation of</p>
                  <p className='text-white'>Sbelka.eth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
