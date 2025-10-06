import { useReducer } from "react";

export default function todoReducer(state, action) {

    switch(action.type) {

        /* add a new  item  */
        case "ADD_TODO":{
            return[
                ...state,
                {id: newID, item: action.payload, completed: false};
            ];
        }
        
        /*  delte an  item  */
        case "DELETE_TODO": {
            return[];
        }
        /* Check off completed item  */
        case "CHECKOFF_TOTO": {
            return[];
        }
        /* Edit item */
        case "EDIT_TOTO": {
            return[];
        }

        default:
            return state;
        }



}