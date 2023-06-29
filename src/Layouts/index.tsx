import React from "react";
import useLayoutHook from "../Shared/Hooks/useLayout";

type ILayout = "blank" | "full" | "dashboard";

interface LayoutProps {
  layout: ILayout;
  component: React.ComponentType<any>;
  state:boolean
}

const Layout: React.FC<LayoutProps> = ({ layout, component: Component,state}) => {
  const Screen = useLayoutHook(layout,state, <Component />);
  return <>{Screen}</>;
};

export default Layout;
