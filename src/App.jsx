import React, { useState } from 'react';

import AddTasks from './components/AddTasks';
import DisplayTasks from './components/DisplayTasks';
import Footer from './components/Footer';


//function to utilize all of our components
// initialize state with empty variable
function App() {
  
  const [tasks, setTasks] = useState([]);


//function to append newTask to state using spread operator
  function handleAddTask(newTask) {

    setTasks([...tasks, newTask]);

  }

  return (
    <div className="App">
      <h1>Task Tracker</h1>

      <AddTasks onSubmit={handleAddTask} />

      <DisplayTasks tasks={tasks} />

      <Footer />

    </div>
  );
}

export default App;