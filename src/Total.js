import React from 'react';

export default function Total(props) {
  return <div>
      <h2>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h2>
  </div>;
}
