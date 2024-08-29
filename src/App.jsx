import { useState } from 'react'
import styled from 'styled-components';
import Startgame from './components/Startgame';
import GamePlay from './components/GamePlay';



function App() {
  const [isGameStarted, setisGameStarted] = useState(false)
  const toggleGamePlay=()=>{
    setisGameStarted((prev)=>!prev)
  }
  return (
    <>
    {isGameStarted ? <GamePlay/> :<Startgame toggle={toggleGamePlay}/>}


    </>
  )
}

export default App
