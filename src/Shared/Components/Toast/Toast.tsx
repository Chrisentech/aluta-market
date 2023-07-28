import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "./toast.styles";

interface ToastProps {
  type: "error" | "success" | "message";
  message: string;
}

const Toast: React.FC<ToastProps> = ({ type, message }) => {
  return (
    <Toaster>
      {(t) => (
        <ToastContainer
          className="ige"
          type={type}
          onClick={() => toast.dismiss(t.id)}
        >
          {message}
        </ToastContainer>
      )}
    </Toaster>
  );
};

export default Toast;
