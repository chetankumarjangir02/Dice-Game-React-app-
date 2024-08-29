import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on the dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as the dice{""}</p>
            <p>if you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
background-color: #6e7072;
color: black;
padding: 20px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
    motion-path: 24px;
}
`
