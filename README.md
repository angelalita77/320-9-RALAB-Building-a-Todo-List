# ALAB 320H.9.1 - Building a Todo List

### Learning Objectives
After completing this lab, learners will have demonstrated the ability to:

Use the useReducer and/or useImmerReducer hook to manage state with reducer functions.
Use useState in places where reducers are not appropriate or necessary.
Implement controlled forms and inputs.
Effectively decide where pieces of state should live.
Use conditional rendering and conditional styling to provide a positive, interactive user experience.
Create a complete React application from a set of desired functionality.

### About The Software
This is a Todo List web app. The user should be able to do the following:
- Enter a new task to the todo field
- Add new tasks by clicking on the [Add] button
- Check off task that are completed
- The option to delete checked off task <br>
- Edit the listed task and save edit changes 
- The Todo List program is in Todos.jsx and located in the "useReaducer" folder
<br><br><br>


Project Progress Tracker
Progress: 85% complete
Checked: 11 / 11 tasks
Progress Bar: [███████████] 

Completed	Requirement	Weight

## 📝 To-Do List Application Requirements

This table tracks the implementation status of all features outlined in the project brief.

| Requirement No. | Feature Description | Implementation Status | Notes |
| :---: | :--- | :---: | :--- |
| **1.** | Heading labeling the list as "Todo List". | [x] | |
| **2.** | List of todo items, each with text, checkbox, and delete/edit buttons. | [x] | Base component structure established. |
| **2.A.** | **Checkbox** indicating completion status. | [x] | Logic to toggle the `isComplete` state. |
| **2.B.** | **Delete** button next to each item. | [x] | |
| **2.B.i** | **DELETE button is DISABLED** unless the todo is complete. | [x] | Conditional rendering logic is required. |
| **3.** | **Edit** button that replaces the todo text with an **input field**. | [x] | Requires a state variable to track the item being edited. |
| **3.i** | **Bind the value** of the edit input to state. | [x] | Ensures accuracy when first displayed. |
| **3.ii** | Hide "delete" and "edit" buttons when input is active; show a **"Save"** button. | [x] | Conditional rendering based on editing state. |
| **3.iii** | The **"Save"** button saves changes to the todo list state. | [x] | Logic to update the todo's text property. |
| **4.** | **Input element** to create and add new todos to the list. | [x] | |
| **5.** | New todos are added to the **TOP** of the list (newest first). | [x] | Use spread operator to prepend the new item. |





