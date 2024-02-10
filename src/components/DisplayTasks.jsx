import React from "react";

//functional component to renders task list
//props is being passed through and we destructure to extract tasks from props object
function DisplayTasks(props) {
  const { tasks } = props;

  //we will return and render the tasks using tasks map method to iterate over tasks and list them
  //list the object in the array at the current index in the iteration
  return (
    <div className="taskList">
      <h2>Task List</h2>
      <ul>
        {tasks.map(function (task, index) {
          return <li key={index}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default DisplayTasks;
