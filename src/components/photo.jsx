import React from 'react';
import {CardImg} from 'reactstrap';


export default function Photo(props){
    // console.log('props given to photo', props);
    // console.log('title given to Photo', props.title)
    if(props.media === "image"){
        if(!props.hdurl){
            return(<CardImg width='500px' height='auto' src={props.theUrl} alt={props.title}/>)
        }
        else{
            return(<CardImg width='500px' height='auto' src={props.theHDUrl} alt={props.title}/>)
        }
    }else{
        return(<video style={{height: '500px', width: '500px'}} controls src={props.theUrl}/>)
    }
}