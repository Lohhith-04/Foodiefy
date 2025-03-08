import React from 'react'
import download from '../assets/download.jpg'

export const card1 = () => {
  return (
    <div className='w-full py-16 px-4 bg-white mt-36 h-[600px]'> 
      <div className='mx-auto max-w-[1280px] grid md:grid-cols-2 '>
        <img src={download} alt='download' className='w-[500px]] h-[500px] mx-auto my-4 ' />
      
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-bold text-[#734141] text-3xl py-2'>We Serve Happiness to your plate</h1>
        <p className='justify-center items-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aliquid temporibus assumenda repellat nisi perferendis illum dolores ipsam? Nemo natus ullam labore ea architecto!</p>
        <button className='bg-[#A5BF19] text-white  max-w-[120px] p-2 rounded-md mx-auto mt-7'>Order Now</button>
        </div>
      </div>
      
    </div>
  )
}
export default card1
  