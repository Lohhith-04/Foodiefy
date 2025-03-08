import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
  <div >
    <div className='max-w-[800px] mt-[150px] w-full  mx-auto text-center flex flex-col'>
    <h1 className="font-bold text-5xl text-[#899F0F]">Welcome to our store</h1>
    <p className='text-bold text-black text-3xl p-5'>Experince the Homely food at your door step</p>
    <div className='text-[#BC5BD7] mt-[-15px]'>
    <TypeAnimation
      sequence={[
        
        'Our promise-No Preservatives',
        1500,
        'Our promise-No Plam oil',
        1550,
        'Our promise-No Food colour',
        1550,
        'Our promise-On time delivery',
        1550
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    
    </div>
    <button className='bg-[#A5BF19] text-white  max-w-[120px] p-2 rounded-md mx-auto mt-3'>Order Now</button>
    </div>
  </div>
  )
}

export default Hero