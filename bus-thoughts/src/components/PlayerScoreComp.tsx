import React from 'react'

interface IPlayerScore {
    name: string
    time: string
    image: string
}
const PlayerScoreComp = (props:IPlayerScore) => {
    const {name,time,image} = props;
  return (
    <div>
        <div>
            <img src={image.toString()} alt='avatar'/>
        </div>
        <div>
            {name}
        </div>
        <div>
            {time}
        </div>
    </div>
  )
}

export default PlayerScoreComp