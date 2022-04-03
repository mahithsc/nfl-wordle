import React from 'react'

interface Props {
    player: object
}

const PlayerBox:React.FC<Props> = ({player}) => {
  return (
    <div>{JSON.stringify(player)}</div>
  )
}

export default PlayerBox