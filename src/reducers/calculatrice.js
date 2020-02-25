const initialState={
    result: "",
    name:"",
    number:""
}

export default ( state = initialState, action = {} )=>{
    let  result, handle
    switch(action.type){
        case 'ADD' :
            //spread le state message avec le nouveau dans un array message
             result = state.number1 + state.number2
             //ici on dit spread le state qui est une copie du state
             // et ajoute result a la copie du state
            return {...state, result}
        case 'MULTIPLE' : 
             result = state.number1 * state.number2
            return {...state, result}
        case 'RESET' : 
            result = initialState.result
           return {...state, result }
        
        case 'HANDLE_CHANGE':
            handle = parseInt(isNaN(action.number)) ? '' : parseInt(action.number )
            return {...state, [action.name]: handle}
        
        
        default:
            return state; 
    }
}