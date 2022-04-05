import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const playerSelection = () => {

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotalySecretKey');

    const [choice, setChoice]: any = useState(null)
    const [link, setLink] = useState(null)
    const players = require('../assets/players_datbase.json')

    const [comingSoon, setCommingSoon] = useState("Coming Soon")

    useEffect(() => {
            setTimeout(() => {
                if(comingSoon.length < 14){
                    setCommingSoon(comingSoon + ".")
                }
                else{
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

export default playerSelection

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