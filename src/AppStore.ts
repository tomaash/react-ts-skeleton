import { action, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

export class AppStore {
  @observable cnt = 0;
  constructor() {
    makeAutoObservable(this);
  }

  @action inc() {
    this.cnt++;
  }
}

export const AppStoreContext = createContext<AppStore>(new AppStore());
