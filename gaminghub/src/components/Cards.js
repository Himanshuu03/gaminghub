import React from 'react'
import Card from './Card';

export default function Cards(props) {
    let gameData = props.gameData;
  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-10">
        {
            gameData.map((element)=>{
                return<Card key={element.id} {...element}></Card>
            })
        }
    </div>
  )
}
