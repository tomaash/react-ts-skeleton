import { observer } from "mobx-react";
// import { useContext } from "react";
import { Route, Switch } from "react-router";
// import { AppStoreContext } from "./AppStore";
import { About, CounterView, Users } from "./Components";

export const MainView = observer(() => {
  // const appStore = useContext(AppStoreContext);
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <CounterView />
      </Route>
    </Switch>
  );
});
