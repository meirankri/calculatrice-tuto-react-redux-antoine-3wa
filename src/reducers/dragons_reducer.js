import {ADD,DRAGON,DELETE_DRAGON, REVERSE} from '../actions/actionsTypes'
const initialState={
    Dragons : [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon:"",
    message : {text:"", status:""}

}


export default ( state = initialState, action = {} )=>{
    
    switch(action.type){
        case DELETE_DRAGON:

            return {...state, Dragons: state.Dragons.filter(d => d!== action.payload), message: {text:
            `vous avez supprimé le dragon ${action.payload} `, status:"danger"} }


        case ADD:
            if(state.dragon.trim() !== "") {
                if(state.Dragons.includes(state.dragon)){
                    
                    return {...state, message: {text:`Ce dragon <<${state.dragon}>> est deja dans votre liste `,status:"danger"} }
                }
                return {...state, Dragons: [...state.Dragons, state.dragon] , dragon:""}
            }else{
                return {...state, 
                message: {text:"Champs vide",status:"warning"} 
                }
            }
        case DRAGON:
            
            return {...state, dragon: action.payload, message: {text:"",status:""} }
        case REVERSE:
                        
            return {...state, Dragons: [...state.Dragons.sort(() => Math.random() - 0.5)]}
        default:
            return state; 
    }
}