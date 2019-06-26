import React from 'react';
const PlusButton = ({count,increaseCount}) =>
{
    return (
        <div>
            <button onClick={() => increaseCount(count + 1)}>+</button>
        </div>
    );
}



export default PlusButton;