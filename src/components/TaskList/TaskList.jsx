import './TaskList.css'

function TaskList( props ) {
  let taskArray = props;
  console.log('task array in taskList',taskArray);
  return (
    <div className="taskList">
      <div className="sidebar glass">
        <h1>SB</h1>
        <div className="sidebarSpacer"></div>
      </div>
      <div className="glass tasks">
        <h1>Tasks</h1>
      </div>
    </div>
  );
}

export default TaskList;
