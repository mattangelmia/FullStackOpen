import React from 'react';
import Part from  './Part'

export default function Content() {
let part1 = 'Fundamentals of React'
let amount1 = 10
let part2 = 'Using props to pass data'
let amount2 = 7
let part3 = 'State of a component'
let amount3 = 14

  return <div>
<Part  part={part1} exerciseAmount={amount1}/>
<Part part={part2} exerciseAmount={amount2}/>
<Part part={part3} exerciseAmount={amount3}/>


  </div>;
}
