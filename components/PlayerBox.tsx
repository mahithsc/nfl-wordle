import React from 'react'

interface Props {
    player: object
}

const PlayerBox:React.FC<Props> = ({player}) => {
  return (
    // <div>{player.name}</div>
    <div className='flex bg-red-500'>
        <div>{player?.name}</div>
    </div>
  )
}

export default PlayerBox