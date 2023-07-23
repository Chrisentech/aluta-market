import React from "react";
import { Container } from "./styles.ts";
import ListView from "./ListView.tsx";
import GridView from "./GridView.tsx";
// enum ViewMode {
//   LIST = "list",
//   GRID = "grid",
// }
interface IVeiw {
  mode: string;
  type?: string | undefined;
  gap?: string | undefined;
}
const View: React.FC<IVeiw> = ({ mode, type, gap }) => {
  return (
    <Container>
      {mode === "list" ? (
        <ListView gap={gap} type={type} />
      ) : (
        <GridView gap={gap} type={type} />
      )}
    </Container>
  );
};

export default View;
