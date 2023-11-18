import React, { Children } from "react";
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
  itempergrid?: number;
  className?: string;
  gridItems?: any[];
  cardStyle?: string;
}
const View: React.FC<IVeiw> = ({ mode, type, className, gap, gridItems, itempergrid, cardStyle }) => {
  
  return (
    <Container>
      {mode === "list" ? (
        <ListView gap={gap} className={className} type={type} />
      ) : (
        <GridView
          gap={gap}
          type={type}
          itempergrid={itempergrid}
          gridItems={gridItems}
          className={className}
          cardType="type1"
          cardStyle={cardStyle}
          showPagination
        />
      )}
    </Container>
  );
};

export default View;
