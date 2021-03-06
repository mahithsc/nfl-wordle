import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

// interface Props {
//   player: object
//   playerOfTheDay: object,
//   changeStateTrue: () => void,
//   // changeStateFalse: () => void,
//   // correct: boolean
// }

const PlayerBox = ({ player, playerOfTheDay, changeStateTrue }) => {
  const teams = require('../assets/nfl_teams.json');

  const [age, setAge] = useState((player.age).substring((player.age).indexOf('(') + 1, (player.age).indexOf(')')));
  const [playerOfTheDayAge, setPlayerOfTheDayAge] = useState((playerOfTheDay.age).substring((playerOfTheDay.age).indexOf('(') + 1, (playerOfTheDay.age).indexOf(')')));

  //this function toggeles between green, yellow, and nothing for when the player of the day team matches the player team
  const changingColorForTeamCOrrect = () => {
    if ((teams[player.team].confrence === teams[playerOfTheDay.team].confrence) && (teams[player.team].division === teams[playerOfTheDay.team].division)) {
      return 'bg-green-600'
    } else if (teams[player.team].confrence === teams[playerOfTheDay.team].confrence) {
      return 'bg-yellow-500'
    } else {
      return null
    }
  }

  const decidingArrowForAge = () => {
    if (age > playerOfTheDayAge) {
      return <AiOutlineArrowDown />
    } else if (age < playerOfTheDayAge) {
      return <AiOutlineArrowUp />
    }
  }

  useEffect(() => {
    if ((player.name === playerOfTheDay.name) && (player.playerPosition === playerOfTheDay.playerPosition) && (player.team === playerOfTheDay.team)) {
      changeStateTrue();
    }
  }, [])

  return (
    <>

    {/* this is the block for small screen */}
      <div className='border-t-8 border-[rgb(25,25,25)] md:hidden'>
        <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null} flex border-black bg-black  text-white font-bold pt-2 pl-2 pb-2`}>{player?.name}</div>
        <div className='grid grid-cols-4  bg-black w-screen lg:w-[50rem] border-t-[rgb(204, 204, 204)] border-t-2'>
          {/* <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{player.playerPosition}</div> */}
          <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{player.playerPosition}</div>
          <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{player.team}</div>
          <div className={`${(age === playerOfTheDayAge) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{`${age}`}
            <div className='flex self-center'>
              {decidingArrowForAge()}
            </div>
          </div>
          <div className={`${changingColorForTeamCOrrect()} flex justify-center py-10 text-white`}>{`${teams[player.team].confrence} ${teams[player.team].division}`}</div>
        </div>
      </div>

      {/* block for large screens */}
      <div className='border-t-8 border-[rgb(25,25,25)] hidden md:block'>
        {/* <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null} flex border-black bg-black  text-white font-bold pt-2 pl-2 pb-2`}>{player?.name}</div> */}
        <div className='grid grid-cols-5  bg-black w-screen md:w-[50rem]'>
          <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null} flex justify-center py-10 text-white font-bold`}>{player.name}</div>
          <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{player.playerPosition}</div>
          <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{player.team}</div>
          <div className={`${(age === playerOfTheDayAge) ? 'bg-green-600' : null} flex justify-center py-10 text-white`}>{`${age}`}
            <div className='flex self-center'>
              {decidingArrowForAge()}
            </div>
          </div>
          <div className={`${changingColorForTeamCOrrect()} flex justify-center py-10 text-white`}>{`${teams[player.team].confrence} ${teams[player.team].division}`}</div>
        </div>
      </div>
    </>


  );
}

export default PlayerBox
