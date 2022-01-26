import React from 'react';
import Part from  './Part'

export default function Content(props) {
// let part1 = 'Fundamentals of React'
// let amount1 = 10
// let part2 = 'Using props to pass data'
// let amount2 = 7
// let part3 = 'State of a component'
// let amount3 = 14





  return <div>
<Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
<Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
<Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>



  </div>;
}
