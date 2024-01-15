import React from "react";
import styled, { keyframes } from "styled-components";

// Skeleton styles
const skeletonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const SkeletonContainer = styled.div`
	margin-bottom: 2em;
`;

// const SkeletonAvatar = styled.div`
// 	background: #e5e4e2;
// 	height: 60px;
// 	width: 60px;
// 	border-radius: 50%;
// 	animation: ${skeletonAnimation} 1.5s infinite;
// `;

// const SkeletonAuthor = styled.div`
// 	background: #e5e4e2;
// 	height: 30px;
// 	width: 150px;
// 	margin-left: 1rem;
// 	border-radius: 6px;
// 	animation: ${skeletonAnimation} 1.5s infinite;
// `;

const SkeletonImage = styled.div<any>`
	height: 200px;
	width: ${({width})=>(width ? width:"200px")};
	border-radius: 6px;
	background: #e5e4e2;
	margin-top: 10px;
	animation: ${skeletonAnimation} 1.5s infinite;
`;

// const SkeletonFooter = styled.div`
// 	height: 30px;
// 	width: 280px;
// 	border-radius: 6px;
// 	background: #e5e4e2;
// 	margin-top: 10px;
// 	animation: ${skeletonAnimation} 1.5s infinite;
// `;

const SkeletonLoader: React.FC<any> = ({width}) => {
	return (
		<SkeletonContainer>
			{/* <SkeletonAvatar /> */}
			<SkeletonImage width={width}/>
			{/* <SkeletonAuthor /> */}

			{/* <SkeletonFooter /> */}
		</SkeletonContainer>
	);
};

export default SkeletonLoader;
