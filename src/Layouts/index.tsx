import React, { ReactNode, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, closeModal } from "../Features/modal/modalSlice";
import useLayoutHook from "../Shared/Hooks/useLayout";
import { Loader, Navbar, Popup, Toast } from "../Shared/Components";
type ILayout = "blank" | "full" | "dashboard";

interface LayoutProps<T> {
  layout: ILayout;
  component: React.ComponentType<T>;
  state: boolean;
  showModal?: string | null; // Pass the modal identifier
  modalWidth?: string;
  popUpContent?: ReactNode;
}

const Layout: React.FC<LayoutProps<any>> = ({
  layout,
  component: Component,
  state,
  showModal,
  modalWidth,
  popUpContent,
}) => {
  const Screen = useLayoutHook(layout, state, <Component />);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrolled(scrollTop > 0);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
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

  const closeModalHandler = () => {
    if (showModal) {
      dispatch(closeModal(showModal));
    }
  };

  if (state) {
    return <Loader />;
  }

  return (
    <>
      <Popup
        show={showModal ? true : false}
        width={modalWidth}
        className="popup"
        onClose={closeModalHandler}
      >
        {popUpContent}
      </Popup>
      <Fragment>
        <Navbar scrolled={scrolled} isMobile={isMobile} />
        <Toast />
        {Screen}
      </Fragment>
    </>
  );
};

Layout.defaultProps = {
  showModal: null,
  modalWidth: "500px",
};

export default Layout;
