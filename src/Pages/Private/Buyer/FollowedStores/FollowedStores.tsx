import { useSelector } from "react-redux";
import { NoFollow } from "../../../../assets";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import Layout from "../../../../Layouts";
import {
	Button,
	Card,
	LogoutModal,
	SkynetModal,
} from "../../../../Shared/Components";
import { GridWrapper, ImgWrapper, Wrapper } from "./FollowedStores.styles";

interface IFollowedStoresProps {
	hasStores: boolean;
}
const Screen: React.FC<IFollowedStoresProps> = ({ hasStores }) => {
	return (
		<Wrapper>
			<h2>Followed Stores</h2>
			<Card className="main" width="100%" height={600}>
				{hasStores ? (
					<GridWrapper>
						<div className="container">
							<ImgWrapper>
								<div className="avatar">
									<div className="img"></div>
								</div>
							</ImgWrapper>
							<h2>Arike Collections</h2>
							<p>Sales of clothing materials for lorem...</p>
							<Button background="#00B517" color="#fff">
								View Store
							</Button>
						</div>
						<div className="container">
							<ImgWrapper>
								<div className="avatar">
									<div className="img"></div>
								</div>
							</ImgWrapper>
							<h2>Arike Collections</h2>
							<p>Sales of clothing materials for lorem...</p>
							<Button background="#00B517" color="#fff">
								View Store
							</Button>
						</div>
						<div className="container">
							<ImgWrapper>
								<div className="avatar">
									<div className="img"></div>
								</div>
							</ImgWrapper>
							<h2>Arike Collections</h2>
							<p>Sales of clothing materials for lorem...</p>
							<Button background="#00B517" color="#fff">
								View Store
							</Button>
						</div>
						<div className="container">
							<ImgWrapper>
								<div className="avatar">
									<div className="img"></div>
								</div>
							</ImgWrapper>
							<h2>Arike Collections</h2>
							<p>Sales of clothing materials for lorem...</p>
							<Button background="#00B517" color="#fff">
								View Store
							</Button>
						</div>
						<div className="container">
							<ImgWrapper>
								<div className="avatar">
									<div className="img"></div>
								</div>
							</ImgWrapper>
							<h2>Arike Collections</h2>
							<p>Sales of clothing materials for lorem...</p>
							<Button background="#00B517" color="#fff">
								View Store
							</Button>
						</div>
					</GridWrapper>
				) : (
					<div className="no_follow">
						<img src={NoFollow} alt="" />
					</div>
				)}
			</Card>
		</Wrapper>
	);
};
Screen.defaultProps = {
	hasStores: true,
};

const FollowedStores = () => {
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout={"dashboard"}
			showModal={activeModal}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
		/>
	);
};

export default FollowedStores;
