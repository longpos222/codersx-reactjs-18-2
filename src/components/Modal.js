import React, { Fragment } from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <Fragment>
      <div id="overlay" style={{ display: props.isDisplay }}>
        <div id="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">This is Modal 1</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={props.handleDisplay}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>
                  {props.children}
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={props.handleDisplay}
                >
                  Accept
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={props.handleDisplay}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
