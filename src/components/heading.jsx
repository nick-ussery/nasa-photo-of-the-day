import React from 'react';


export default function Heading(props){
    // console.log('props given to heading', props);
    return(
        <h1>
            {props.data}
        </h1>
    )
}