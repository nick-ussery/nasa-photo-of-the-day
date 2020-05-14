import React from 'react';
import {CardSubtitle} from 'reactstrap';


export default function Date(props){
    return(
        <CardSubtitle>
            Photo of the day on {props.date}
        </CardSubtitle>
    )
}