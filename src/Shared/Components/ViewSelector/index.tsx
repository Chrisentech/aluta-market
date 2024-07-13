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
	itempergrid?: number;
	className?: string;
	background?: string;
	listItems?: any[];
	gridItems?: any[];
	cardStyle?: string;
}
const View: React.FC<IVeiw> = ({
	mode,
	type,
	className,
	background,
	gap,
	listItems,
	gridItems,
	itempergrid,
	cardStyle,
}) => {
	return (
		<Container>
			{mode === "list" ? (
				<ListView
					gap={gap}
					className={className}
					type={type}
					listItems={listItems}
				/>
			) : (
				<GridView
					gap={gap}
					type={type}
					itempergrid={itempergrid}
					gridItems={gridItems}
					background={background}
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
