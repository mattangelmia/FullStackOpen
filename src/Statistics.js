import React from 'react';

export default function Statistics(props) {
    if(props.total === 0){
        return(
            <div>
            <h3>No feedback Given</h3>
            </div>
            )
    }
    return(
        <div>
        <p>{props.text}, {props.score}</p>
        </div>
        )
}
