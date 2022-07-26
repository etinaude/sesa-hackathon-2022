import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import ThoughtsPage from "./pages/thoughts/Thoughts";
import ThoughtsPost from "./pages/thoughts/ThoughtsPost";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import "./theme/variables.css";
import "./index.css";
import Replies from "./pages/replies/Replies";
import WelcomePage from "./pages/Welcome";
import LeaderBoard from "./pages/LeaderBoard";
// import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <BrowserRouter>
          <Route exact path="/thoughts">
            <ThoughtsPage />
          </Route>
          <Route path="/canvas">
            <Tab2 />
          </Route>
          <Route path="/bus-123/canvas">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/thoughts/post">
            <ThoughtsPost />
          </Route>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/bus-123/leaderboard">
            <LeaderBoard />
          </Route>
          <Route path="/bus-123/thoughts/replies">
            <Replies />
          </Route>
        </BrowserRouter>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
