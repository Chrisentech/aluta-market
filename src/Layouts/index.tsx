import React, { Fragment, useEffect, useState } from "react";
import useLayoutHook from "../Shared/Hooks/useLayout";
import { Loader, Navbar } from "../Shared/Components";

type ILayout = "blank" | "full" | "dashboard";

interface LayoutProps {
  layout: ILayout;
  component: React.ComponentType<any>;
  state: boolean;
  mode?: string;
}

const Layout: React.FC<LayoutProps> = ({
  layout,
  component: Component,
  state,
  mode,
}) => {
  const Screen = useLayoutHook(layout, state, mode, <Component />);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

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
    <Fragment>
      <Navbar scrolled={scrolled} isMobile={isMobile} mode={mode} />
      {Screen}
    </Fragment>
  );
};

export default Layout;
