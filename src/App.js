import React from 'react'
import Header from './Header'
import Total from './Total'
import { useState } from 'react'
import Buttons from "./Buttons"
import Statistics from './Statistics'




const App = () => {
let goodText = "good"
let badText = "bad"
let neutralText = "neutral"

const header = "give feedback"
const [goodScore, setGoodScore] = useState(0)
const [neutralScore, setNeutralScore] = useState(0)
const [badScore, setBadScore] = useState(0)

 const goodFeedBack=()=>{
  console.log("good!")
  setGoodScore(goodScore+1)
  

 }
  
 const badFeedBack=()=>{
  console.log("bad!")
  setBadScore(badScore+1)

 }

 const neutralFeedBack=()=>{
  console.log("neutral!")
  setNeutralScore(neutralScore+1)

 }

  let total =  goodScore + badScore + neutralScore


 const average = total / 3

 const positiveAverage = total / goodScore  

const positiveAverageTotal = 100 / positiveAverage

 console.log(positiveAverageTotal)
  
  

  
  return (
    <div>
   <Header header={header}/>
   <div style={{display: 'flex'}}>
   <Buttons text={goodText} action={goodFeedBack}/>
   <Buttons text={neutralText} action={neutralFeedBack}/>
   <Buttons text={badText} action={badFeedBack}/>
   
   </div>

<div>
  <h3>Statistics</h3>
  <Statistics text={goodText} score={goodScore}/>
  <Statistics text={badText} score={badScore}/>
  <Statistics text={neutralText} score={neutralScore}/>
  <Statistics text="all" score={total}/>
  <Statistics text="average" score={average}/>
  <Statistics text="positive" score={positiveAverageTotal}/>

</div>
  
    </div>
  )
}

export default App