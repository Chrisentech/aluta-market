import { useSelector } from "react-redux";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import Layout from "../../../../Layouts";
import { LogoutModal, SkynetModal, View } from "../../../../Shared/Components";
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
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout={"dashboard"}
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
			component={Screen}
			showModal={activeModal}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default Review;
