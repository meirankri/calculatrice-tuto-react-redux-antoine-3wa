import {ADD, DRAGON,DELETE_DRAGON, REVERSE} from './actionsTypes';



export const addDragon = ()=>{
    
    return {
        type: ADD
    }
}
export const setDragon = (payload)=>{
    
    return {
        type: DRAGON,
         payload
    }
}
export const deleteDragon = (payload)=>{
    
    return {
        type: DELETE_DRAGON,
         payload
    }
}
export const reverseDragon = ()=>{
    
    return {
        type: REVERSE
    }
}