import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
    width: 800px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

const CardText = styled.p`
    text-align: left;

`

export default function Explanation(props){
    return(
        <CardBody>
            <CardText>{props.explanation}</CardText>            
        </CardBody>
    )
}