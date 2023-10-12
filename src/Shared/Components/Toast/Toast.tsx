import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearAlert } from "../../../Features/alert/alertSlice";

interface ToastProps {
  // message: string;
}

const Toast: React.FC<ToastProps> = () => {
  const { status,message } = useSelector((state: any) => state.alert);
  const dispatch = useDispatch()
  

  useEffect(() => {
    if (status && status == "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT, // Set the position using the POSITION constant
        hideProgressBar: false,
        closeOnClick: true,
        
      });
      setTimeout(() => {
        dispatch(clearAlert());
      }, 500);
    } else if (status && status == "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT, // Set the position using the POSITION constant
        hideProgressBar: false,
        closeOnClick: true,
        
      });
      setTimeout(() => {
        dispatch(clearAlert());
      }, 500);
    } 
  }, [status, message]);

  return <ToastContainer className={"am_toast"} />;
};

export default Toast;
