import { logo } from "../../../assets";
import { LoaderBall, Flex, LoaderContainer } from "./loader.style";

const Loader = () => {
	return (
		<Flex>
			<LoaderContainer>
				<img src={logo} alt="logo" />
				<div>
					<LoaderBall />
					<LoaderBall />
					<LoaderBall />
				</div>
			</LoaderContainer>
			{/* <p>Loading...</p> */}
		</Flex>
	);
};

export default Loader;
