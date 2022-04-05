import React, { useEffect, useState } from 'react'

// interface Props {
//   player: object
//   playerOfTheDay: object,
//   changeStateTrue: () => void,
//   // changeStateFalse: () => void,
//   // correct: boolean
// }

const PlayerBox = ({ player, playerOfTheDay, changeStateTrue }) => {
  const teams = require('../assets/nfl_teams.json');

  const [age, playerAge] = useState((player.age).substring((player.age).indexOf('(')+1, (player.age).indexOf(')')));

  const something = () => {
    if ((teams[player.team].confrence === teams[playerOfTheDay.team].confrence) && (teams[player.team].division === teams[playerOfTheDay.team].division)) {
      return 'bg-green-600'
    }//else if statement
    else if (teams[player.team].confrence === teams[playerOfTheDay.team].confrence) {
      return 'bg-yellow-500'
    } else {
      return null
    }
  }

  useEffect(() => {
    if((player.name === playerOfTheDay.name) && (player.playerPosition === playerOfTheDay.playerPosition) && (player.team === playerOfTheDay.team)) {
      changeStateTrue();
    }
  }, [])

  return (
    // <div>{player.name}</div>
    <div className='grid grid-cols-5 border-black border-t-4 bg-slate-200 w-screen lg:w-[50rem]'>
      <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null} flex justify-center font-bold py-10`}>{player?.name}</div>
      {/* <div>{player?.name}</div> */}
      <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center py-10`}>{player.playerPosition}</div>
      <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null} flex justify-center py-10`}>{player.team}</div>
      <div className={`${(player.age === playerOfTheDay.age) ? 'bg-green-600' : null} flex justify-center py-10`}>{age}</div>
      <div className={`${something()} flex justify-center py-10`}>{`${teams[player.team].confrence} ${teams[player.team].division}`}</div>
      {/* <div className={`${(player.age === playerOfTheDay.age) ? 'bg-green-600' : null} flex justify-center py-10`}>{teams[`${player.team}}`].division}</div> */}
    </div>
  );
}

export default PlayerBox


// ${ ? 'bg-green-600' : null}
//       ${(teams[player.team].confrence) === (teams[playerOfTheDay.team].confrence)?'bg-yellow-500':null}