import React from 'react';

export default function ChangeDayButton(props){
    // props.cb.bind(this);
    return(
    <button onClick={function(){props.cb}}>{props.phrase}</button>
    )
}