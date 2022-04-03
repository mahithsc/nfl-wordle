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
  const [numberOfPicks, setNumberOfPicks] = useState(0)

  //state variables for the players
  const [choice, setChoice]:any = useState('')
  const [choiceTwo, setChoiceTwo]:any = useState('hello')
  const [choiceThree, setChoiceThree]:any = useState('hello')
  const [choiceFour, setChoiceFour]:any = useState('hello')
  const [choiceFive, setChoiceFive]:any = useState('hello')
  const [choiceSix, setChoiceSix]:any = useState('hello')
  const [choiceSeven, setChoiceSeven]:any = useState('hello')
  const [choiceEight, setChoiceEight]:any = useState('hello')

  //function which decides which state variable to changfe based on the number of picks
  const changeStateFunc = (numberOfIterations:number, value:string|null) => {
    if (numberOfIterations === 1) {
      setChoice(value)
    } else if (numberOfIterations === 2) {
      setChoiceTwo(value)
    } else if (numberOfIterations === 3) {
      setChoiceThree(value)
    } else if (numberOfIterations === 4) {
      setChoiceFour(value)
    } else if (numberOfIterations === 5) {
      setChoiceFive(value)
    } else if (numberOfIterations === 6) {
      setChoiceSix(value)
    } else if (numberOfIterations === 7) {
      setChoiceSeven(value)
    } else if (numberOfIterations === 8) {
      setChoiceEight(value)
    }
  }



  useEffect(() => {
    setNumberOfPicks(picks => picks + 1)
  }, [choice, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight])

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
      <div className='flex flex-col items-center mt-11'>

        {
        
        (numberOfPicks <= 8) ?
        (<Autocomplete
          className='w-[35rem]'
          disablePortal
          id="free-solo-demo"
          options={players}
          getOptionLabel={(option: any) => option?.name}

          //when an option is selected, set the state of the choice
          onChange={(event: any, newValue: string | null) => {
            changeStateFunc(numberOfPicks, newValue)
          }}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />
          }
        />):null
      }

        
      </div>

      <div className='flex flex-col items-center'>
        <div>{JSON.stringify(choice.name)}</div>
        <div>{JSON.stringify(choiceTwo.name)}</div>
        <div>{JSON.stringify(choiceThree.name)}</div>
        <div>{JSON.stringify(choiceFour.name)}</div>
        <div>{JSON.stringify(choiceFive.name)}</div>
        <div>{JSON.stringify(choiceSix.name)}</div>
        <div>{JSON.stringify(choiceSeven.name)}</div>
        <div>{JSON.stringify(choiceEight.name)}</div>
      </div>



    </div>
  )
}

export default Home