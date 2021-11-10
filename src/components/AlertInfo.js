import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlertInfo(props) {
  const notify = () => toast("Hello world");
  return (
    <div>
      <button onClick={notify}>Click</button>
      <ToastContainer />
    </div>
  );
}

export default AlertInfo;
