import React from 'react'

const Mail = () => {
  return (
    <div className='bg-black text-white py-16 px-6 h-[250px] w-full mx-auto '>
      <div className='grid md:grid-cols-2 justify-center items-center'>
        <div>
          <h1 className='text-3xl font-bold'>For More Enquiries drop your contact Number</h1>
          <p className='text-bold text-2xl mt-2'>Our Team will contact in 2-Working days</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full mt-6'>
          <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
            <input type='number' placeholder='Enter your number' className='p-2 rounded-md w-[300px] my-4 sm:my-0 sm:mr-4 flex'/>
            <button className='bg-[#A5BF19] text-white max-w-[100px] p-2 rounded-md flex'>Submit</button>
          </div>
          <p className='text-sm text-gray-400 mt-4'>We care about the protection of your data</p>
        </div>
      </div>
    </div>
  )
}

export default Mail