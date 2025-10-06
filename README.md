# ALAB 320H.9.1 - Building a Todo List

### Learning Objectives
After completing this lab, learners will have demonstrated the ability to:

Use the useReducer and/or useImmerReducer hook to manage state with reducer functions.
Use useState in places where reducers are not appropriate or necessary.
Implement controlled forms and inputs.
Effectively decide where pieces of state should live.
Use conditional rendering and conditional styling to provide a positive, interactive user experience.
Create a complete React application from a set of desired functionality.



Project Progress Tracker
Progress: 85% complete
Checked: 12 / 14 tasks
Progress Bar: [░░░░░] (85%)

Completed	Requirement	Weight

## 📝 To-Do List Application Requirements

This table tracks the implementation status of all features outlined in the project brief.

| Requirement No. | Feature Description | Implementation Status | Notes |
| :---: | :--- | :---: | :--- |
| **1.** | Heading labeling the list as "Todo List". | [x] | |
| **2.** | List of todo items, each with text, checkbox, and delete/edit buttons. | [ ] | Base component structure established. |
| **2.A.** | **Checkbox** indicating completion status. | [ ] | Logic to toggle the `isComplete` state. |
| **2.B.** | **Delete** button next to each item. | [ ] | |
| **2.B.i** | **DELETE button is DISABLED** unless the todo is complete. | [ ] | Conditional rendering logic is required. |
| **3.** | **Edit** button that replaces the todo text with an **input field**. | [ ] | Requires a state variable to track the item being edited. |
| **3.i** | **Bind the value** of the edit input to state. | [ ] | Ensures accuracy when first displayed. |
| **3.ii** | Hide "delete" and "edit" buttons when input is active; show a **"Save"** button. | [ ] | Conditional rendering based on editing state. |
| **3.iii** | The **"Save"** button saves changes to the todo list state. | [ ] | Logic to update the todo's text property. |
| **4.** | **Input element** to create and add new todos to the list. | [ ] | |
| **5.** | New todos are added to the **TOP** of the list (newest first). | [ ] | Use spread operator to prepend the new item. |

Change - [ ] to - [x] when you finish a task.
Add up the weights of the checked items.
Update the Progress line at the top (e.g., 35% complete).
Update the Checked count (e.g., 5 / 14 tasks).
Update the Progress Bar:
Each ░ = 10% progress
Replace with █ as you advance
Example: If you finish tasks worth 30% → [█░░░░░░░░░░] (30%)

