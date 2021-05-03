function TaskDetails(props) {
  let details = props.details;
  return (
    <div className="details">
      <div className="detailsText">
        <h1>{details.task_name}</h1>
        <p>{details.description}</p>
      </div>
      <div className="time">
        <p>Due by:{details.due_date} Time left: {details.remaining}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
