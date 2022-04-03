import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Home: NextPage = () => {
  //importing all the players from the JSON file
  const players = require('../assets/players_datbase.json')

  return (
    <div>
      <div className='bg-slate-900 flex justify-center'>
        <div className='text-3xl text-white my-5'>Godell</div>
      </div>
      <div className='items-center flex flex-col relative'>
        <img src={players[2].photo} className='flex-1 brightness-[0]' width={500} />
        <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
      </div>

      <Autocomplete
        disablePortal
        id="free-solo-demo"
        options={players}
        getOptionLabel={(option:any) => option?.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />
        }
      />

    </div>
  )
}

export default Home