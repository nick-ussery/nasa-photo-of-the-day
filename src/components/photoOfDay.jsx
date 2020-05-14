import React from 'react';
import Heading from './heading';
import Photo from './photo';
import Date from './date';
import Explanation  from './explanation';
import {Card} from 'reactstrap';



export default function PhotoOfDay(props){
    // console.log('props given to PhotoOfDay',props);
    // console.log('date from props', props.data.date);


    return(
<Card>
    <Heading data={props.data.title} />
    <Photo media={props.data.media_type} title={props.data.title} theUrl={props.data.url} theHDUrl ={props.data.hdurl}/>
    <Date date={props.data.date}/>
    <Explanation explanation={props.data.explanation}/>
</Card>
)}