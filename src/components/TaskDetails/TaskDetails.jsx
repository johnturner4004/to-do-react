import "./TaskDetails.css";

function TaskDetails(props) {
  let details = props.details;
  return (
    <div className="details">
      <div className="detailsText">
        <h1>{details.task_name}</h1>
        <p>{details.description}</p>
      </div>
      <div className="time">
        <p>
          Time added: <br />
          {details.time_added}
        </p>
        <p>
          Due by: <br />
          {details.due_date}
        </p>
        <p>
          Time left: <br />
          {details.remaining}
        </p>
      </div>
      <div className="taskButtons">
        <div className="flex">
          <button id="del">Delete</button>
        </div>
        <div className="flex">
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              class="onoffswitch-checkbox"
              id="myonoffswitch"
              tabindex="0"
            />
            <label class="onoffswitch-label" for="myonoffswitch">
              <span class="onoffswitch-inner"></span>
              <span class="onoffswitch-switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
