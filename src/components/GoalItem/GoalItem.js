import React from 'react';

function GoalItem(props){
    return (
        <>
          <h1>
          <li>
            {props.title}
          </li>
           </h1>
          <p>{props.description}</p>
        </>
    )
}

export default GoalItem
