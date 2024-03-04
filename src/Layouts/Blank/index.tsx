import React, { ReactNode, useEffect } from "react";
import { Wrapper } from "./blank.style";
// import { Loader } from "../../Shared/Components";

interface IScreenProps {
	loading: boolean;
	children: ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ children }) => {
	useEffect(() => {
		try {
			localStorage?.removeItem("isDashboard");
		} catch (error) {
			console.error("Error removing item from localStorage:", error);
		}
	}, []);
	return <Wrapper>{children}</Wrapper>;
};

export default Screen;
