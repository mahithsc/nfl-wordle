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

  //importing all the players from the JSON file
  const players = require('../assets/players_datbase.json')

  //state varibale for the player of the day
  const [playerOfTheDay, setPlayerOfTheDay] = useState(players[0]);

  //keps track of the number of picks the user has made
  const [numberOfPicks, setNumberOfPicks] = useState(0)

  //state variables for the players
  const [choice, setChoice]: any = useState('')
  const [choiceTwo, setChoiceTwo]: any = useState('hello')
  const [choiceThree, setChoiceThree]: any = useState('hello')
  const [choiceFour, setChoiceFour]: any = useState('hello')
  const [choiceFive, setChoiceFive]: any = useState('hello')
  const [choiceSix, setChoiceSix]: any = useState('hello')
  const [choiceSeven, setChoiceSeven]: any = useState('hello')
  const [choiceEight, setChoiceEight]: any = useState('hello')

  //function which decides which state variable to changfe based on the number of picks
  const changeStateFunc = (numberOfIterations: number, value: string | null) => {
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

  return (
    <div>

      <Title />

      <div className='flex flex-col items-center mt-11'>

        {(numberOfPicks <= 8) ?
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

            renderInput={(params) => <TextField {...params} />
            }
          />) : null}

      </div>

      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='items-center flex flex-col relative'>
          <img src={playerOfTheDay.photo} className='flex-1 brightness-[0]' width={500} />
          <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
        </div>


        <div className='flex flex-col mt-10 flex-1'>
          <PlayerBox player={choice} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceTwo} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceThree} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceFour} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceFive} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceSix} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceSeven} playerOfTheDay = {playerOfTheDay} />
          <PlayerBox player={choiceEight} playerOfTheDay = {playerOfTheDay} />

        </div>

      </div>





    </div>
  )
}

export default Home