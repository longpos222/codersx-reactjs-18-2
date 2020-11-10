import React, { useState, Fragment } from "react";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  const [isDisplay, setIsDisplay] = useState("none");

  const [content, setContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");

  function handleDisplay() {
    setIsDisplay(isDisplay => isDisplay === "none" ? "block" : "none");
  }

  return (
    <Fragment>
      <Modal isDisplay={isDisplay} handleDisplay={handleDisplay} content={content}>
        <p>This is a <strong>children</strong> example.</p>
      </Modal>
        <button type="button" class="btn btn-success" onClick={handleDisplay}>
          Open Modal
        </button>
    </Fragment>
  );
}
