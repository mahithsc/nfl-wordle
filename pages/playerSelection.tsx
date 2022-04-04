import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

const playerSelection = () => {

    const [choice, setChoice]: any = useState(null)

    const players = require('../assets/players_datbase.json')


    return (
        <div className='flex items-center flex-col'>

            <div className='items-center flex flex-col relative'>
                {(choice === null)? <img src={'https://static.clubs.nfl.com/image/private/t_editorial_squared_6_desktop/f_png/v1571889300/nfl100/fnn6lnf5f2pl7uj9jjyu.png'} className={`${true ? 'brightness-[1]' : 'brightness-[0]'}'flex-1 '`} width={400} />  : <img src={choice?.photo} className={`${true ? 'brightness-[1]' : 'brightness-[0]'}'flex-1 '`} width={500} />}
                <div className='absolute h-[100%] w-[100%] bg-white-500 bottom-0'></div>
            </div>

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
        </div>
    )
}

export default playerSelection