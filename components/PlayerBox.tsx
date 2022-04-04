import React from 'react'

interface Props {
    player: object
    playerOfTheDay: object
}

const PlayerBox:React.FC<Props> = ({player, playerOfTheDay}) => {
  return (
    // <div>{player.name}</div>
    <div className='grid grid-cols-4 gap-10'>
      <div>{player?.name}</div>
        {/* <div>{player?.name}</div> */}
        <div>{player.playerPosition}</div>
        <div>{player.team}</div>
        <div>something</div>

    </div>
  )
}

export default PlayerBox