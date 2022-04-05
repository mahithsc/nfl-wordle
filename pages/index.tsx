import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ClassNames } from '@emotion/react';
import { positions } from '@mui/system';
import PlayerBox from '../components/PlayerBox';
import Title from '../components/Title';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen w-screen bg-slate-600 items-center justify-center'>
      <div className='text-white font-bold'>Waddle</div>
      <a href=""></a>
    </div>
  )  
}

export default Home

// `${correct?'brightness-1':'brightness-0'}'flex-1 '`