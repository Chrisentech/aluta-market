import { loaderGif } from "../../../assets";
import { Flex, LoaderContainer } from "./loader.style";

const Loader = () => {
	return (
		<Flex>
			<LoaderContainer>
				<img src={loaderGif} alt="logo" width={80} />
			</LoaderContainer>
			{/* <p>Loading...</p> */}
		</Flex>
	);
};

export default Loader;
