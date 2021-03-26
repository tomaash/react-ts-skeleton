import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { AppStore, AppStoreContext } from "./AppStore";
import { MainView } from "./MainView";
import { AppWrapper } from "./Components";

function App() {
  return (
    <AppStoreContext.Provider value={new AppStore()}>
      {/* <div className="App"> */}
      <AppWrapper>
        <MainView />
      </AppWrapper>
      {/* </div> */}
    </AppStoreContext.Provider>
  );
}

export default App;
