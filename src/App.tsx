import "./App.css";
import { AppStore, AppStoreContext } from "./AppStore";
import { MainView } from "./MainView";
import { AppWrapper, NavBar } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AppStoreContext.Provider value={new AppStore()}>
      <Router>
        <AppWrapper>
          <NavBar />
          <MainView />
        </AppWrapper>
      </Router>
    </AppStoreContext.Provider>
  );
}

export default App;
