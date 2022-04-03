import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ClassNames } from '@emotion/react';
import { positions } from '@mui/system';

const Home: NextPage = () => {
  //importing all the players from the JSON file
  const players = require('../assets/players_datbase.json')

  //keps track of the number of picks the user has made
  const [numberOfPicks, setNumberOfPicks] = useState(-1)

  //state variables for the players
  const [choice, setChoice]:any = useState('')
  const [choiceTwo, setChoiceTwo]:any = useState('')
  const [choiceThree, setChoiceThree]:any = useState('')
  const [choiceFour, setChoiceFour]:any = useState('')
  const [choiceFive, setChoiceFive]:any = useState('')
  const [choiceSix, setChoiceSix]:any = useState('')
  const [choiceSeven, setChoiceSeven]:any = useState('')
  const [choiceEight, setChoiceEight]:any = useState('')


  useEffect(() => {
    console.log(choice)
    setNumberOfPicks(picks => picks + 1)
  }, [choice])

  useEffect(() => {
    console.log(numberOfPicks)
  } , [numberOfPicks])

  return (
    <div>
      <div className='bg-slate-900 flex justify-center'>
        <div className='text-3xl text-white my-5'>Godell</div>
      </div>
      <div className='items-center flex flex-col relative'>
        <img src={players[2].photo} className='flex-1 brightness-[0]' width={500} />
        <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
      </div>
      <div
        //make the background color bluw
        className='flex flex-col items-center mt-11'>
        <Autocomplete
          className='w-[35rem]'
          disablePortal
          id="free-solo-demo"
          options={players}
          getOptionLabel={(option: any) => option?.name}

          //when an option is selected, set the state of the choice
          onChange={(event: any, newValue: string | null) => {
            setChoice(newValue)
          }}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />
          }
        />
      </div>

      <div className='flex flex-col items-center'>
        <div>{JSON.stringify(choice.name)}</div>
      </div>



    </div>
  )
}

export default Home