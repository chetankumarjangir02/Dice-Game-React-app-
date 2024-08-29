import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [Score, setScore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [Error, setError] = useState("")
  const [showRules, setshowRules] = useState(false)
  const generateRandoNumber =(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}
const roleDice=()=>{
  if(!selectedNumber){
    setError("You Have Not Selected any Number");
    return;
  }
  
    const randomNumber=generateRandoNumber(1,7);
    setCurrentDice((prev)=>randomNumber)
    if(selectedNumber===randomNumber){
      setScore(prev=>prev+randomNumber)
    }else{
      setScore(prev=>prev-2);
    }
    setselectedNumber(undefined)
}
const resetScore=()=>{
  setScore(0);
}
  return (
    <Main>
      <div className="topsection">
      <TotalScore Score={Score}/>
      <NumberSelector
      Error={Error}
      setError={setError}
       selectedNumber={selectedNumber}
        setselectedNumber={setselectedNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice}/>
      <div className="btns">
       <OutlineButton onClick={resetScore}>Reset</OutlineButton>
       <Button onClick={()=>setshowRules(prev=>!prev)} >{showRules ? "hide":"Show"} Rules</Button>
      </div>
     { showRules && <Rules/>}
    </Main>
  )
}

export default GamePlay
const Main=styled.div`
padding: 10px;
  .topsection{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    margin-top: 30px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`
