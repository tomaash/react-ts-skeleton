import { observer } from "mobx-react";
import { useContext } from "react";
import { AppStoreContext } from "./AppStore";

export const MainView = observer(() => {
  // Grab the timer from the context.
  const appStore = useContext(AppStoreContext); // See the Timer definition above.
  return (
    <div>
      <div>Seconds passed1: {appStore.cnt}</div>
      <button onClick={() => appStore.inc()}>Click!</button>
    </div>
  );
});
