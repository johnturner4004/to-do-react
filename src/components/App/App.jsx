import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import axios from 'axios';

function App() {
  const [taskArray, setTaskArray] = useState();

  useEffect(() => {
    getList();
  });

  const getList = () => {
    axios
      .get('/task')
      .then((response) => {
        setTaskArray(response.data);
      })
      .catch((error) => {
        console.log('Error getting task list from server', error);
        alert('Unable to get to-do list from server');
      });
  };

  return (
    <>
      <Header />
      <TaskList taskArray={taskArray}/>
    </>
  );
}

export default App;
