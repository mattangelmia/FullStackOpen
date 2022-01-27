import React from 'react';

export default function Winner(props) {
  return <div>
<p>
  The current leader is <strong>{props.leader}</strong> with <strong>{props.voteCount}</strong> 
</p>


  </div>;
}
