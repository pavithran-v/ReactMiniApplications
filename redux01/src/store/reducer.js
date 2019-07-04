import results from "./result";


const intialState = {
    counter : 0,
    results : []
}

const reducer = (state = intialState,action) =>
{
    switch(action.type)
    {
        case 'AGE_UP':
            return{
                ...state,
                counter:state.counter+1,
                results:state.results.concat({id:Math.random(),val:state.counter+1}) 
            }
        case 'AGE_DOWN' :
            return{
                ...state,
                counter:state.counter-1,
                results:state.results.concat({id:Math.random(),val:state.counter-1})
            }
        case 'AGE_INC' :
            return{
                ...state,
                counter:state.counter+5,
                results:state.results.concat({id:Math.random(),val:state.counter+5})
            }
        case 'AGE_DESC' :
                return{
                    ...state,
                    counter:state.counter-5,
                    results:state.results.concat({id:Math.random(),val:state.counter-5})
                }
        default : 
            return state;
    }
}


export default reducer;