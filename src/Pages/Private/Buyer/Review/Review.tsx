import Layout from "../../../../Layouts";
import { View } from "../../../../Shared/Components";
import { Wrapper } from "./Review.styles";

const Screen: React.FC = () => {
	return (
		<Wrapper>
			<h2>Rate and Review</h2>
			<View
				mode="list"
				itempergrid={3}
				cardStyle="order-card"
				className="dash_grid_2"
				type="review"
			/>
		</Wrapper>
	);
};

const Review = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default Review;
