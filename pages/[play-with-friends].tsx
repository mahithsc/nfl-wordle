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

    const [comingSoon, setCommingSoon] = useState("Coming Soon")

    //changing the number of picks made
    useEffect(() => {
        setNumberOfPicks(picks => picks + 1)
    }, [choice, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight])

    useEffect(() => {
        setTimeout(() => {
            if (comingSoon.length < 14) {
                setCommingSoon(comingSoon + ".")
            }
            else {
                setCommingSoon("Coming Soon")
            }
        }, 750)
    })
    return (
        <div>
            <Title />
            <div className='flex h-screen items-center justify-center'>
                <div className='font-bold text-2xl'>{comingSoon}</div>
            </div>

        </div>
    )
}

export default playWithFriends