import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const RollDice = ({roleDice,CurrentDice}) => {
    
   

  return (
  <DiceContainer>
    <div className='dice' onClick={roleDice}>
        <img src={`dice_${CurrentDice}.png`} alt="dice1" />
    </div>
    <p>Click on Dice to Roll</p>
  </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 24px;
.dice{
    cursor: pointer;

}
p{
font-size: 24px;
}
`
