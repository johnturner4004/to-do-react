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
        console.log('Retrieved task list from server', response);
        setTaskArray(response.data);
      })
      // .catch((error) => {
      //   console.log('Error getting task list from server', error);
      //   alert('Unable to get to-do list from server');
      // });
    taskArray
      ? console.log('tasks', taskArray)
      : console.log('taskArray not ready');
  };

  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
