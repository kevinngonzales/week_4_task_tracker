//import react module and useState hook
import React, { useState } from "react";

//create functional component which recives props from parent component
function AddTasks(props) {
  //useState hook: newTask is what user inputs and setNewTask is a function used to update value of newTask
  const [newTask, setNewTask] = useState("");

  //this function handles changes in the form input field
  //when the form checks for changes then this function is called and setNewTask gets called and updates the value of newTask to whatever gets put in the input field
  function handleChange(e) {
    setNewTask(e.target.value);
  }

  //this function handles the add task button and when button is clicked then
  //use props that is passed down from AddTask function to handle what happens when button is clicked
  //calling props.onSubmit with the object containing the text that user is inputting allows the AddTasks function to communicate with its parent component  for handling form submissions
  //lastly, we call the setNewTask function to update newTask state and also clear the input field when input is submitted
  //use event.preventDefault() as event handler to prevent the default action of refreshing the page when button is pressed
  function handleButton(e) {
    e.preventDefault();
    props.onSubmit({
      text: newTask,
    });
    setNewTask("");
  }

  //create a form element with necessary attributes
  // set value to newTask state to bind the value of the input field to state
  //use onChange to call handle change function when there is a change to input field
  //lastly, create button to submit whatever is in the input field
  return (
    <form className="taskForm" onSubmit={handleButton}>
      <input
        type="text"
        value={newTask}
        name="text"
        className="taskForm"
        onChange={handleChange}
      />

      <button className="taskButton"> Add Task </button>
    </form>
  );
}

export default AddTasks;
