import { useReducer } from "react";

const TODOS_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task'
}

export default function todoReducer(state, action) {

    switch(action.type) {

        /* add a new  item  */
        case TODOS_ACTIONS.ADD_TASK:{
            return[
                ...state,
                {id: state.length+1, task: action.payload, completed: false}
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