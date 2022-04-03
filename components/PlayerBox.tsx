import React from 'react'

interface Props {
    player: object
}

const PlayerBox:React.FC<Props> = ({player}) => {
  return (
    <div>{player.name}</div>
  )
}

export default PlayerBox