import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col h-screen w-screen bg-slate-600'>
      <Title/>
      <div className='flex flex-col h-screen items-center justify-center space-y-10'>
        <Link href="/unlimited" ><div className='text-white hover:underline text-2xl'>Unlimited Waddle</div></Link>
        <Link href="/player-selection"><div className='text-white hover:underline text-2xl'>Play With Friends</div></Link>
      </div>

      <div className='self-center'>
        <div className='text-white'>by: <Link href={'https://github.com'}><a className='underline'>Mahith Chitrapu</a></Link></div>
        <div className='text-white'>Inspired by <Link href={'https://weddlegame.com'}><a className='underline'>Weddle</a></Link></div>
      </div>
    </div>
  )
}

export default Home

// `${correct?'brightness-1':'brightness-0'}'flex-1 '`