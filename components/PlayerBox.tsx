import React from 'react'

interface Props {
  player: object
  playerOfTheDay: object
}

const PlayerBox: React.FC<Props> = ({ player, playerOfTheDay }) => {
  return (
    // <div>{player.name}</div>
    <div className='grid grid-cols-4 border-black border-t-2 bg-slate-200 gap-5'>
      <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null}  justify-center font-bold`}>{player?.name}</div>
      {/* <div>{player?.name}</div> */}
      <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null} flex justify-center `}>{player.playerPosition}</div>
      <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null} flex justify-center`}>{player.team}</div>
      <div className='lg:mx-10 md:mx-5 flex justify-center'>{player.age}</div>

      <div className='h-10'></div>
    </div>
  );
}

export default PlayerBox