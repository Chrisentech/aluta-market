import { LoaderBall,Flex, LoaderContainer } from "./loader.style";

const Loader = () => {
  return (
    <Flex>
      <LoaderContainer>
        <LoaderBall />
        <LoaderBall />
        <LoaderBall />
      </LoaderContainer>
      <p>Loading...</p>
    </Flex>
  );
};

export default Loader;
