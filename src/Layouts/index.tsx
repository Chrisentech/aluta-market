import React, { ReactNode, Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useLayoutHook from "../Shared/Hooks/useLayout";
import { Loader, Navbar, Popup, Toast } from "../Shared/Components";

type ILayout = "blank" | "full" | "dashboard";

interface LayoutProps<T> {
	layout: ILayout;
	component: React.ComponentType<T>;
	isLoading: boolean;
	showModal?: string | null;
	modalPadding?: string | number;
	modalWidth?: string | number;
	navMode?: string;
	popUpContent?: ReactNode;
}

const Layout: React.FC<LayoutProps<any>> = ({
	layout,
	component: Component,
	isLoading,
	showModal,
	modalWidth,
	modalPadding,
	navMode,
	popUpContent,
}) => {
	const isDashboard = localStorage.getItem("isDashboard");
	const Screen = useLayoutHook(layout, isLoading, <Component />);
	useEffect(() => {
		if (isLoading) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
		// Cleanup on component unmount
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [isLoading]);
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < (isDashboard === "true" ? 1082 : 768)
	);
	const [scrolled, setScrolled] = useState(false);
	const { modals } = useSelector((state: any) => state.modal);

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		setScrolled(scrollTop > 0);
	};

	const handleResize = () => {
		const isMobileValue =
			window.innerWidth < (isDashboard === "true" ? 1082 : 768);
		setIsMobile(isMobileValue);
		localStorage.setItem("isMobile", JSON.stringify(isMobileValue));
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial isMobile value on component mount
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			<Popup
				padding={modalPadding}
				show={showModal && modals[showModal] ? modals[showModal] : false}
				width={modalWidth}
				className="popup"
				// onClose={closeModalHandler}
			>
				{popUpContent}
			</Popup>
			<Fragment>
				{isLoading && <Loader />}
				<Navbar
					scrolled={scrolled}
					isMobile={isMobile} // Use isMobile state here
					mode={navMode}
				/>
				<Toast />
				{Screen}
			</Fragment>
		</div>
	);
};

Layout.defaultProps = {
	showModal: null,
	modalWidth: "600px",
	modalPadding: 0,
};

export default Layout;
