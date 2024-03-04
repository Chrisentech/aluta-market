import React, { ReactNode, useEffect } from "react";
import { Wrapper } from "./full.style";
import { Footer } from "../../Shared/Components";

interface IScreenProps {
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

	return (
		<Wrapper>
			{children}
			<Footer />
		</Wrapper>
	);
};

export default Screen;
