import React from 'react'
import Header from './Header'
import Total from './Total'
import { useState } from 'react'
import Buttons from "./Buttons"
import Statistics from './Statistics'
import Anecdote from './Anecdote'
import Winner from './Winner'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


   
  const [votes, setVotes] = useState(Array(7).fill(0))
  const [selected, setSelected] = useState(0)
  const [index, setHighestIndex] = useState(0)
  const [winner, setWinner] = useState("")
  const [highestNumber, setHighestNumber] = useState(0)
  const randomIndex = Math.floor(Math.random() * anecdotes.length);

const getRandom = ()=>{
const randomIndex = Math.floor(Math.random() * anecdotes.length);
setSelected(randomIndex)

}


const getWinner = () =>{
let highest = Math.max(...votes) 
let highestIndex=votes.indexOf(highest)
console.log(highestIndex)
console.log(highest)
setWinner(anecdotes[highestIndex])
setHighestNumber(highest)
}



const upVote = () => {
const newVotes = [...votes]
newVotes[selected] += 1
setVotes(newVotes)
console.log(votes)

getWinner()


}

  
  return (
    
    <div>
  <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
  <button onClick={getRandom}>Next anectdote</button>
  <button onClick={upVote}>Vote</button>
  <button onClick={getWinner}>Get highest </button>
  <div>
    <Winner leader={winner} voteCount={highestNumber}/>
  </div>
    </div>
  
  


  )
}

export default App