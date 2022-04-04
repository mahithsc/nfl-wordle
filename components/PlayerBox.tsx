import React from 'react'

interface Props {
  player: object
  playerOfTheDay: object
}

const PlayerBox: React.FC<Props> = ({ player, playerOfTheDay }) => {
  return (
    // <div>{player.name}</div>
    <div className='grid grid-cols-4 border-black border-t-4 bg-slate-200 w-screen lg:w-[60rem]'>
      <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null} flex justify-center font-bold py-10`}>{player?.name}</div>
      {/* <div>{player?.name}</div> */}
      <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center py-10`}>{player.playerPosition}</div>
      <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null} flex justify-center py-10`}>{player.team}</div>
      <div className='lg:mx-10 md:mx-5 flex justify-center py-10'>{player.age}</div>

    </div>
  );
}

export default PlayerBox