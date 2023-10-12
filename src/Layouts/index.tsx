import React, { ReactNode, Fragment, useEffect, useState } from "react";
import useLayoutHook from "../Shared/Hooks/useLayout";
import { Loader, Navbar, Popup, Toast } from "../Shared/Components";
import { useSelector } from "react-redux";
type ILayout = "blank" | "full" | "dashboard";

interface LayoutProps<T> {
  layout: ILayout;
  component: React.ComponentType<T>;
  state: boolean;
  showModal?: boolean;
  popUpContent?: ReactNode;
  modalWidth?: string;
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
  const {show} = useSelector((el:any)=>el.modal)

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
  if (state) {
    return <Loader />;
  }
  
  return (
    <>
     
      {
        <Popup show={showModal} width={modalWidth} className="popup">
          {popUpContent}
        </Popup>
      }
      <Fragment>
        <Navbar scrolled={scrolled} isMobile={isMobile} />
        {!show && <Toast />}
        {Screen}
      </Fragment>
    </>
  );
};

Layout.defaultProps = {
  showModal: false,
  modalWidth: "500px",
};

export default Layout;
