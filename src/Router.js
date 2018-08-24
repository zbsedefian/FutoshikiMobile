import React from "react";
import { Actions, Scene, Router } from "react-native-router-flux";
import SplashScreen from "./components/SplashScreen";
import Settings from "./components/Settings";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcomeScene">
          <Scene
            key="splashScreen"
            component={SplashScreen}
            title="SplashScreen"
            initial
            hideNavBar
          />
        </Scene>
        <Scene key="main">
          <Scene key="settings" component={Settings} title="wtf" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
