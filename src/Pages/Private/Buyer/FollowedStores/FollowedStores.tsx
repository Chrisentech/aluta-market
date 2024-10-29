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
import { fetchMe } from "../../../../Features/user/userSlice";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

const Screen = () => {
	const me = useSelector(fetchMe);
	const nav = useNavigate();

	return (
		<Wrapper>
			<h2>Followed Stores</h2>
			<Card className="main" width="100%" height={600}>
				{me?.stores?.length > 0 ? (
					<GridWrapper>
						{me?.stores.map((store: any) => (
							<div key={store.link} className="container">
								<ImgWrapper img={store?.background} avatar={store?.thumbnail}>
									<div className="avatar">
										<div className="img"></div>
									</div>
								</ImgWrapper>
								<h2>{store.name}</h2>
								<p>{truncate(store.description || "", { length: 100 })}</p>
								<Button
									background="#00B517"
									color="#fff"
									onClick={() => nav(`/${store.link}`)}
								>
									View Store
								</Button>
							</div>
						))}
					</GridWrapper>
				) : (
					<div className="no_follow">
						<img src={NoFollow} alt="No followed stores" />
					</div>
				)}
			</Card>
		</Wrapper>
	);
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
