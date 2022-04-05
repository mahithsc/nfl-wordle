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

const playWithFriends = () => {
    const players = require('../assets/players_datbase.json')

    //state variables for the players
    const [choice, setChoice]: any = useState(null)
    const [choiceTwo, setChoiceTwo]: any = useState(null)
    const [choiceThree, setChoiceThree]: any = useState(null)
    const [choiceFour, setChoiceFour]: any = useState(null)
    const [choiceFive, setChoiceFive]: any = useState(null)
    const [choiceSix, setChoiceSix]: any = useState(null)
    const [choiceSeven, setChoiceSeven]: any = useState(null)
    const [choiceEight, setChoiceEight]: any = useState(null)

    //state varibale for the player of the day
    const [playerOfTheDay, setPlayerOfTheDay] = useState(players[0]);

    //state for the sillhoute
    const [sillhoute, setSillhoute] = useState(false);

    //keps track of the number of picks the user has made
    const [numberOfPicks, setNumberOfPicks] = useState(0)

    //state variable for checking wether the user got the correct answer
    const [correct, setCorrect] = useState(false)

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

    //this is used in the player box file to change the correctness of the guesse state
    const changeCorrectTrue = () => {
        setCorrect(true)
    }

    //changing the number of picks made
    useEffect(() => {
        setNumberOfPicks(picks => picks + 1)
    }, [choice, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight])

    return (
        <div>
            <Title />

            <div className='flex flex-col items-center mt-11'>
                <Autocomplete
                    disabled={correct}
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
                />
            </div>

            <div className='flex flex-1 flex-col'>
                <div className='flex flex-col mt-10 flex-1 items-center'>
                    <div>
                        {(choice === null) ? null : (<PlayerBox player={choice} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceTwo === null) ? null : (<PlayerBox player={choiceTwo} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceThree === null) ? null : (<PlayerBox player={choiceThree} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceFour === null) ? null : (<PlayerBox player={choiceFour} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceFive === null) ? null : (<PlayerBox player={choiceFive} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceSix === null) ? null : (<PlayerBox player={choiceSix} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceSeven === null) ? null : (<PlayerBox player={choiceSeven} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                        {(choiceEight === null) ? null : (<PlayerBox player={choiceEight} playerOfTheDay={playerOfTheDay} changeStateTrue={changeCorrectTrue} />)}
                    </div>
                </div>
                {correct ? <div className='items-center flex flex-col relative'>
                    <img src={playerOfTheDay.photo} className={`${correct ? 'brightness-1' : 'brightness-0'}`} width={500} />
                    <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
                </div> : null}
            </div>
        </div>
    )
}

export default playWithFriends