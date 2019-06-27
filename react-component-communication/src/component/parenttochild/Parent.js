import React from 'react';
import Child from './Child'
const Parent = (props) =>
{
    return(
        <div>
            <Child doWhatEver={props.changeTheWorldEvent} title={props.title}/>
            <br/>  <br/>
            <Child doWhatEver={props.changeTheWorldSameEvent} title={props.title}/>
        </div>
    );
}



export default Parent;