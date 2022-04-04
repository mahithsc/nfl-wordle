import React from 'react'

interface Props {
  player: object
  playerOfTheDay: object
}

const PlayerBox: React.FC<Props> = ({ player, playerOfTheDay }) => {
  return (
    // <div>{player.name}</div>
    <div className='grid grid-cols-4 gap-20 border-black'>
      <div className={`${(player.name === playerOfTheDay.name) ? 'bg-green-600' : null}`}>{player?.name}</div>
      {/* <div>{player?.name}</div> */}
      <div className={`${(player.playerPosition === playerOfTheDay.playerPosition) ? 'bg-green-600' : null}`}>{player.playerPosition}</div>
      <div className={`${(player.team === playerOfTheDay.team) ? 'bg-green-600' : null}`}>{player.team}</div>
      <div>{player.age}</div>

    </div>
  );
}

export default PlayerBox