import styled, { css } from "styled-components";

// Styling for the toast container
export const ToastContainer = styled.div<{
  type: "error" | "success" | "message";
}>`
  background-color: ${(props) =>
    props.type === "error"
      ? "#ff3333"
      : props.type === "success"
      ? "#33ff33"
      : "#333"};
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 8px;
  
`;
