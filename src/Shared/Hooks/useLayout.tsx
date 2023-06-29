import { useEffect, useState } from "react";
import BlankScreen from "../../Layouts/Blank";
import FullScreen from "../../Layouts/Full";
import DashboardScreen from "../../Layouts/Dashboard";



const useLayoutHook = (layout: string, state:boolean, Component?: React.ReactNode) => {
  const [screen, setScreen] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    // Define your logic to determine the screen based on layout
    if (layout === "blank") {
      setScreen(<BlankScreen />);
    } else if (layout === "full") {
      setScreen(<FullScreen loading={state}>{Component}</FullScreen>);
    } else {
      setScreen(<DashboardScreen />);
    }
  }, [layout,state]);

  return screen ;
};

export default useLayoutHook;
