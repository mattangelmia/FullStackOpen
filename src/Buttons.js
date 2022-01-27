import React from 'react';

export default function Buttons(props) {
  return <div>
<button onClick={props.action}>{props.text}</button>



  </div>;
}
