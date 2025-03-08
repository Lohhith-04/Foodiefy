import React from 'react'
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img6 from '../assets/img6.png'


const Pricing = () => {
  return (
    <div  className='bg-white py-[10rem] px-4 w-full h-[680px]' >  
      <div className='grid md:grid-cols-3 gap-3 w-max-[1240px] mx-auto  '>
        <div className='flex flex-col w-full shadow-lg p-4 my-4 hover:scale-105 duration-150'>
          <img className='mt-[-3rem] w-20 rounded-lg mx-auto' src={img1} />
          <h2 className='text-3xl text-center text-bold'>1 Month</h2>
          <p className='text-bold text-xl text-center mt-3'>₹2500</p>
          <p className='text-red-700 text-center text-lg border-b mt-5 mx-8'>No discount</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>Sunday Holiday</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>DoorStep delivery</p>
          <button className='bg-[#A5BF19] text-white max-w-[100px] p-2 rounded-md flex mx-auto mt-4'>Order Now</button>

          
          
          
        </div>
        <div className='flex flex-col w-full shadow-lg p-4 my-4 hover:scale-105 duration-150'>
          <img className='mt-[-3rem] w-20 rounded-lg mx-auto' src={img3} />
          <h2 className='text-3xl text-center text-bold'>1 Month</h2>
          <p className='text-bold text-xl text-center mt-3'>₹7500</p>
          <p className='text-[#A5BF20] text-center text-lg border-b mt-5 mx-8'>5% Instant discount</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>Sunday Holiday</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>DoorStep delivery</p>
          <button className='bg-[#A5BF19] text-white max-w-[100px] p-2 rounded-md flex mx-auto mt-4'>Order Now</button>

          
          
          
        </div>
        <div className='flex flex-col w-full shadow-lg p-4 my-4 hover:scale-105 duration-150'>
          <img className='mt-[-3rem] w-20 rounded-lg mx-auto' src={img6} />
          <h2 className='text-3xl text-center text-bold'>1 Month</h2>
          <p className='text-bold text-xl text-center mt-3'>₹14500</p>
          <p className='text-[#A5BF19] text-center text-lg border-b mt-5 mx-8'>10% Instant discount</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>Sunday Holiday</p>
          <p className=' text-center text-lg border-b mt-3 mx-8'>DoorStep delivery</p>
          <button className='bg-[#A5BF19] text-white max-w-[100px] p-2 rounded-md flex mx-auto mt-4'>Order Now</button>

          
          
          
        </div>
        
        </div>
        </div> 
  )
}

export default Pricing