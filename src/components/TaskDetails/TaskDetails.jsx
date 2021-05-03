function TaskDetails(props) {
  let details = props.details;
  console.log("in TaskDetails", details);
  return (
    <div className="details">
      <div className="detailsText">
        <h1>{details.task_name}</h1>
        <p>{details.description}</p>
      </div>
      <div className="time">
        <p>Time added: {details.time_added} Time due:{details.due_date}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
