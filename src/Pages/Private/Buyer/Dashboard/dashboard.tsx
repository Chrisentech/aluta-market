import React from "react";
import { Wrapper } from "./dashboard.styles";
import Layout from "../../../../Layouts";
import { LogoutModal, SkynetModal } from "../../../../Shared/Components";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import { useSelector } from "react-redux";

const Screen: React.FC = () => {
	return <Wrapper>buyer dashboard</Wrapper>;
};

const Dashboard = () => {
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout={"dashboard"}
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
			showModal={activeModal}
			component={Screen}
			isLoading={false}
		/>
	);
};

export default Dashboard;
