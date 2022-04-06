import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const PlayerSelection = () => {
    const players = require('../assets/players_datbase.json')

    const index = players.findIndex((player: any) => {
        return player.name === 'Jaylen Waddle';
    });

    const [choice, setChoice]: any = useState(players[index])

    


    return (
        <div>
            <Title />
            <div className='mt-10'>
                <div className='text-xl text-center font-bold'>create a Waddle game by picking a player!</div>
                <div className='text-center flex-wrap'>pick a player from the searchbar, then hit the copy link button at the bottom and share!</div>
            </div>
            <div className='flex flex-col items-center mt-11'>
                <Autocomplete
                    className='sm:w-[35rem] w-screen mx-1'
                    disablePortal
                    id="free-solo-demo"
                    options={players}
                    getOptionLabel={(option: any) => option?.name}
                    //when an option is selected, set the state of the choice
                    onChange={(event: any, newValue: string | null) => { setChoice(newValue) }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            {choice !== null ? (<div className='items-center flex flex-col relative'>
                <img src={choice.photo} width={500} />
                <div className='font-bold text-2xl'>{choice.name}</div>
                <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
            </div>) : null}

            {choice !== null ? (<div className='flex justify-center mt-8'>
                <button className='text-white bg-slate-900 px-5 py-2 rounded-xl mb-10'>
                    copy link
                </button>
            </div>) : null}
        </div>
    )
}

export default PlayerSelection

{/* <div className=''>
            <Title />
            <div className='flex flex-col items-center h-screen justify-center'>
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

                    renderInput={(params) => <TextField {...params} />
                    }
                />

                <div className='items-center flex flex-col relative'>
                    {(choice === null) ? 
                    <img src={'https://static.clubs.nfl.com/image/private/t_editorial_squared_6_desktop/f_png/v1571889300/nfl100/fnn6lnf5f2pl7uj9jjyu.png'} className={`${true ? 'brightness-[1]' : 'brightness-[0]'}'flex-1 '`} width={400} /> : <img src={choice?.photo} className={`${true ? 'brightness-[1]' : 'brightness-[0]'}'flex-1 '`} width={500} />}
                    <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
                </div>
                <button className='border-2 border-slate-900 hover:bg-slate-900 hover:text-white' onClick={() => {
                    navigator.clipboard.writeText(`https://www.nfl.com/${cryptr.encrypt(choice.name)}`)
                }}>Copy Link To Clipboard</button>
                {(link !== null)?<div>{link}</div>:null}
            </div>
        </div> */}