import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    //route to /unlimited
    router.push('/unlimited');
  })
  return (
    <div></div>
    
    // <div className='flex flex-col h-screen w-screen bg-black'>
    //   <Title />
    //   <div className='flex flex-col h-screen items-center justify-center space-y-10'>
    //     <Link href={'/unlimited'}>
    //       <a className='text-white text-3xl hover:underline'>Waddle</a>
    //     </Link>

    //   </div>

    //   <div className='self-center mb-20'>
    //     <div className='text-white'>by: <Link href={'https://www.linkedin.com/in/mchitrapu/'}><a className='underline'>Mahith Chitrapu</a></Link></div>
    //     <div className='text-white'>Inspired by <Link href={'https://weddlegame.com'}><a className='underline'>Weddle</a></Link></div>
    //   </div>
    // </div>
  )
}

export default Home

// `${correct?'brightness-1':'brightness-0'}'flex-1 '`