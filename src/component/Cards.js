import React from 'react';
import img1 from '../assests/single.png';
import img2 from '../assests/double.png';
import img3 from '../assests/triple.png';

export default function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img src={img1} alt='' className='w-20 mx-auto mt-[-3rem] bg-white'/>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-4xl font-bold text-center'>$149</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted Users</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
        </div>
      </div>
      <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
        <img src={img2} alt='' className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-4xl font-bold text-center'>$149</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted Users</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            <button className='bg-black text-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
        </div>
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img src={img3} alt='' className='w-20 mx-auto mt-[-3rem] bg-white'/>
        <h2 className='text-2xl font-bold text-center py-8'>Single Users</h2>
        <p className='text-4xl font-bold text-center'>$149</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '>500 GB storage</p>
            <p className='py-2 border-b mx-8 '>1 Granted Users</p>
            <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
        </div>
      </div>
    </div>
      
    </div>
  )
}
