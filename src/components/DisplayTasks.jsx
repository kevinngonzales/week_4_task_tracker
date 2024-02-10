import React from 'react';

//functional component to renders task list
//props is being passed through and we destructure to extract tasks from props object
function DisplayTasks(props) {
    const { tasks } = props;

//we will return and render the tasks using tasks map method to iterate over tasks and list them
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.text}</li>
          ))}
        </ul>
      </div>
    );
  }

export default DisplayTasks;