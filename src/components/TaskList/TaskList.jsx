import "./TaskList.css";
import TaskDetails from '../TaskDetails/TaskDetails'

function TaskList(props) {
  let taskArray = props.taskArray;
  // console.log("task array in taskList", taskArray);
  return (
    <div className="taskList">
      <div className="sidebar glass">
        <h1>SB</h1>
        <div className="sidebarSpacer"></div>
      </div>
      <div className="glass tasks">
        {taskArray ? taskArray.map( details => {
          // {console.log('Details',details);}
          return(
          <div className="glass taskBox" key={details.id}>
            <TaskDetails details={details}/>
          </div>
          )
          }) : <div>Not loaded</div>
        }
      </div>
    </div>
  );
}

export default TaskList;
