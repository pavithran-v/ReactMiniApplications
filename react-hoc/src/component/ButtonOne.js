import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) =>
{
    return (
        <button style={props.styles}>I'm a button</button>
    )
}


export default stylesWrapper(ButtonOne);