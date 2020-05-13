import React from 'react';

export default function Photo(props){
    // console.log('props given to photo', props);
    // console.log('title given to Photo', props.title)
    if(props.media === "image"){
        if(!props.hdurl){
            return(<img src={props.theUrl} alt={props.title}/>)
        }
        else{
            return(<img src={props.theHDUrl} alt={props.title}/>)
        }
    }else{
        return(<p>No Video Functionality yet</p>)
    }
}