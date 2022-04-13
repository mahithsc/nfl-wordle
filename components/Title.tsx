import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Title = () => {
  return (
    <div className='bg-black h-16 flex items-center space-x-10'>
      <div className='flex'>
        {/* <Link href={'/'}><button className='text-white hover:bg-[rgb(50,50,50)] rounded-md px-5 py-5'>home</button></Link> */}
        <Link href={'/unlimited'}><button className='text-white hover:bg-[rgb(50,50,50)] rounded-md px-5 py-5'>unlimited</button></Link>
        <Link href={'/player-selection'}><button className='text-white hover:bg-[rgb(50,50,50)] rounded-md px-5 py-5'>vs. friends</button></Link>        
        <Link href={'/how-to-play'}><button className='text-white hover:bg-[rgb(50,50,50)] rounded-md px-5 py-5'>how to play</button></Link>        
      </div>



    </div>
  )
}

export default Title; 