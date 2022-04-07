import { Autocomplete, dividerClasses, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const PlayerSelection = () => {
    const arr = ['cGNQ2MUm4S', 'f0hClsDTw2', 'aeOR9qGHb2', 'b3k5PX4SDG', 'JPsyr3bEtf', 'jLq3y9hkTX', 'CmgtRmnLfw', 'NndhCHLX0C', 'W7wF4cjgpy', 'azPv3L8f4q']
    const players = require('../assets/players_datbase.json')

    const index = players.findIndex((player: any) => {
        return player.name === 'Jaylen Waddle';
    });

    const [choice, setChoice]: any = useState(players[index])
    const [selected, setSelected] = useState(false)

    const encrypt = (value: string) => {
        setSelected(true)
        const random = Math.floor(Math.random() * arr.length);
        const index = players.findIndex((player: any) => {
            return player.name === choice.name;
        });
        const string = arr[random] + index;
        console.log(string)
        //copy to clipboard
        navigator.clipboard.writeText(`https://www.waddlegame.org/${string}`);
        // console.log(`copied ${copy}`)
    }

    return (
        <div className='min-h-screen bg-[rgb(25,25,25)]'>
            <div className='h-16'></div>
      <div>
        <div className='text-center text-white text-5xl'>waddle <div className='text-xl mt-2'>vs. friends</div></div>
        {/* <div className='text-center flex-wrap text-white'>you can keep generating new players, and you have 7 tries to guesse each player. let&apos;s see if you can get it!</div> */}
      </div>
            <div className='flex flex-col items-center mt-11'>
                <Autocomplete
                    className='sm:w-[35rem] w-screen mx-1'
                    disablePortal
                    id="free-solo-demo"
                    options={players}
                    getOptionLabel={(option: any) => option?.name}
                    //when an option is selected, set the state of the choice
                    onChange={(event: any, newValue: string | null) => { 
                        setChoice(newValue) 
                        setSelected(false)}}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            {choice !== null ? (<div className='items-center flex flex-col relative'>
                <img src={choice.photo} width={500} />
                <div className='font-bold text-2xl text-white'>{choice.name}</div>
                <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
            </div>) : null}

            {choice !== null ? (<div className='flex justify-center mt-8'>
                <button className={`${!selected?'bg-black': 'bg-green-500'} text-white  px-5 py-2 rounded-xl mb-10 md:w-[35rem] md:h-14 w-screen mx-16 h-14`} onClick={() => {
                    encrypt(choice.name)
                }}>
                    {!selected?(<div>copy link</div>):<div>copied!</div>}
                </button>
            </div>) : null}

        </div>
    )
}

export default PlayerSelection