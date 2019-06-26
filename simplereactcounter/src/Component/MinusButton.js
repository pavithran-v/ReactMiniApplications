import React from 'react';


const MinusButton = ({count,decreaseCount}) =>
{
    return (
        <div>
            <button onClick={() => decreaseCount(count - 1)}>-</button>
        </div>
    );
}



export default MinusButton;