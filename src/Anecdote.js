import React from 'react';

export default function Anecdote(props) {
  return (<div>

      <h4>{props.text}</h4>
      <p>Votes: {props.votes}</p>
  </div>
  )
}
