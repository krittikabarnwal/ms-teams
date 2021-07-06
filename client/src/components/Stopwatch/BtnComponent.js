import React from "react";
import "./stopwatchStyle.scss";

function BtnComponent(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}
          title="Start"
        >
          <i class="fas fa-circle"></i>
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div className="d-flex justify-content-around">
          <button
            className="stopwatch-btn stopwatch-btn-red"
            title="Stop"
            onClick={props.stop}
          >
            <i class="fas fa-circle"></i>
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            title="Reset"
            onClick={props.reset}
          >
            <i class="fas fa-circle"></i>
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div className="d-flex justify-content-around">
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            title="Resume"
            onClick={props.resume}
          >
            <i class="fas fa-circle"></i>
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
            title="Reset"
          >
            <i class="fas fa-circle"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
