import React from 'react'

interface Props {
    player: object
    playerOfTheDay: object
}

const PlayerBox:React.FC<Props> = ({player, playerOfTheDay}) => {
  return (
    // <div>{player.name}</div>
    <div className='flex'>
        <div>{player?.name}</div>
        {(player?.name === playerOfTheDay?.name) ?(<div> correct</div>) : null}
    </div>
  )
}

export default PlayerBox