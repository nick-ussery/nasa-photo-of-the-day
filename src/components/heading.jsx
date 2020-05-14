import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    font-size: 36px;
    margin-bottom: 20px;

`

export default function Heading(props){
    // console.log('props given to heading', props);
    return(
        <Header>
            {props.data}
        </Header>
    )
}