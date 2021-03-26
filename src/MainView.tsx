import { observer } from "mobx-react";
// import { useContext } from "react";
import { Route, Switch } from "react-router";
// import { AppStoreContext } from "./AppStore";
import {
  AboutComponent,
  CounterView,
  Users,
  UsersComponent,
} from "./Components";
import { PeoplePage } from "./PeoplePage";

export const MainView = observer(() => {
  // const appStore = useContext(AppStoreContext);
  return (
    <Switch>
      <Route path="/about">
        <AboutComponent />
      </Route>
      <Route path="/people">
        <PeoplePage />
      </Route>
      <Route path="/">
        <CounterView />
      </Route>
    </Switch>
  );
});
