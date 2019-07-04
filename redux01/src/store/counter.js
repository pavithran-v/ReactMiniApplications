const intialState = {
    counter : 0
}

const counter = (state = intialState,action) =>
{
    switch(action.type)
    {
        case 'AGE_UP':
            return{
                ...state,
                counter:state.counter+1
            }
        case 'AGE_DOWN' :
            return{
                ...state,
                counter:state.counter-1
            }
        case 'AGE_INC' :
            return{
                ...state,
                counter:state.counter+5
            }
        case 'AGE_DESC' :
                return{
                    ...state,
                    counter:state.counter-5
                }
        default : 
            return state;
    }
}


export default counter;