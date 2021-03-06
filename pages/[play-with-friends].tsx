import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PlayerBox from '../components/PlayerBox';
import HeaderForPlayerBox from '../components/HeaderForPlayerBox';
import Link from 'next/link';

const PlayingWithFriends: NextPage = () => {
    //importing all the players from the JSON file
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

    //used int he playerbox component to change the correctness of the answer
    const changeCorrectTrue = () => {
        setCorrect(true)
    }

    useEffect(() => {
        //get current path name
        const currentURL = window.location.pathname
        setPlayerOfTheDay(players[currentURL.substring(11)])
    }, [])

    //changing the number of picks made
    useEffect(() => {
        setNumberOfPicks(picks => picks + 1)
    }, [choice, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight])

    useEffect(() => {
        if (numberOfPicks === 8) {
            setCorrect(true)
        }
    })

    return (
        <div className='min-h-screen bg-[rgb(25,25,25)]'>
            <Title />
            <div className='h-16'></div>
            <div></div>
            <div>
                <div className='text-center text-white text-5xl'>waddle <div className='text-xl mt-2'>guessing vs. friend</div></div>
            </div>
            <div className='flex flex-col items-center mt-11'>
                <Autocomplete
                    style={{
                        borderColor: '#ffffff',
                        borderWidth: '1px',
                        borderRadius: '5px',
                        backgroundColor: 'white'
                    }}
                    disabled={correct}
                    className='sm:w-[35rem] w-screen mx-1'
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
                {correct ? (<div className='items-center flex flex-col relative'>
                    <img src={playerOfTheDay.photo} className={`${correct ? 'brightness-1' : 'brightness-0'}`} width={500} />
                    <div className='font-bold text-2xl text-white'>{playerOfTheDay.name}</div>
                    <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
                </div>) : null}
                <div className='flex flex-col mt-10 flex-1 items-center'>
                    <div>
                        {(choice === null) ? null : <HeaderForPlayerBox />}
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
            </div>
            <div className='mt-7'>
                <div className='text-white text-center'>created by: <Link href={'https://www.linkedin.com/in/mchitrapu/'}><a className='underline'>Mahith Chitrapu</a></Link></div>
                <div className='text-white text-center'>inspired by the original: <Link href={'https://weddlegame.com'}><a className='underline'>Weddle</a></Link></div>
            </div>
        </div>
    )
}

export default PlayingWithFriends