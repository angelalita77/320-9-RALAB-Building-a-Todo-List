import { useReducer, useState } from "react";
import { initialState } from "../data/initialState";

// Create enums for switch actions
// To reduce chances of spelling errors
const TODOS_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    TOGGLE_TASK: 'toggle_task',
    EDIT_TASK: 'edit_task'
}



function reducer(state, action) {
    //monitoring state hook data pass
    console.log("--- Reducer Call ---");
    console.log("Current State (before update):", state);
    console.log("Action Received:", action);

    switch (action.type) {

        case TODOS_ACTIONS.ADD_TASK: return [
            {
                id: crypto.randomUUID(), //unique id assigned to new tasks
                task: action.payload, 
                completed: false
            },
            ...state, 
        ];

        case TODOS_ACTIONS.DELETE_TASK:
            return state.filter(todo =>
                todo.id !== action.payload)



        case TODOS_ACTIONS.TOGGLE_TASK:
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        // Not sure Edit button it isn't working
        // It should find the id of the task and allow 
        // a new task to be entered
        case TODOS_ACTIONS.EDIT_TASK:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, task: action.payload.newTask }
                    : todo
            );

        default: return state;
    }
}



const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState(""); 
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    return (
        <>

            {/* Adding a new Task  */}
            {/* Input Field: User can type new task */}
            Add New Task:
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            {/* Add Button: Adds the task from the input field to the list */}
            <button
                onClick={() => {
                    if (!newTask.trim()) return; // prevent empty tasks from being added
                    dispatch({
                        type: TODOS_ACTIONS.ADD_TASK,
                        payload: newTask.trim(),
                    });
                    setNewTask(""); // clear input
                }}
            >
                Add
            </button>

            {/* Task list displayed under input field */}
            <ol>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                dispatch({
                                    type: TODOS_ACTIONS.TOGGLE_TASK,
                                    payload: todo.id,
                                })
                            }
                        />
                        
                        {editingId === todo.id ? (
                            <>
                             {/* If ture then show edit mode with Save button (Edit and Delete is gone) */}
                             <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                autoFocus //The cursor active (focused) in text field
                                />
                                <button
                                    onClick={() => {
                                        if(!editText.trim()) return;
                                        dispatch({
                                            type: TODOS_ACTIONS.EDIT_TASK,
                                            payload: {id: todo.id,
                                                    newTask: editText.trim()
                                                    },
                                        });
                                        setEditingId(null);
                                        setEditText("")
                                                }
                                    }
                                    >
                                        Save
                                    </button>
                            </>
                        ):(
                            <>
                                {/* Else show listed task normally with Edit and Delete button */}
                                {/* If checkbox is checked (completed = true) then put a line-through else don't */}
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>  
                                {todo.task} 
                            </span>

                            <button
                                onClick = {() => {
                                    setEditingId(todo.id);
                                    setEditText(todo.task);
                                }}
                                style={{ marginLeft: "10px" }}
                                >
                                Edit
                            </button>

                            {/* Delete Button: Disabled when task is not completed */}
                            <button onClick={() => {
                                // saving type and payload in action to
                                // monitor hooks in console.log
                                const action = {
                                    type: TODOS_ACTIONS.DELETE_TASK,
                                    payload: todo.id
                                };
                                console.log("Action object deleted: ", action);
                                dispatch(action);

                             }}
                                disabled={!todo.completed}
                                style={{
                                    marginLeft: "15px",
                                    opacity: todo.completed ? 1 : 0.5,
                                    cursor: todo.completed ? "pointer" : "not-allowed",
                                }}>
                                    Delete
                                </button>
                            </>
                        )}
                        {/* End of click editing listed task */}
                    </li>))}
            </ol>

        </>
    )


}

export default Todos;


