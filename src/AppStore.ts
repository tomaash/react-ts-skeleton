import ky from "ky";
import { action, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

export interface StarWarsPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
}

interface SwapiResult {
  count: number;
  results: Array<any>;
}

export class AppStore {
  @observable cnt = 0;
  @observable people: Array<StarWarsPerson> = [];
  constructor() {
    makeAutoObservable(this);
  }

  @action
  inc() {
    this.cnt++;
  }

  @action async loadPeople() {
    const res: SwapiResult = await ky
      .get("https://swapi.dev/api/people")
      .json();
    this.people = res.results;
  }
}

export const AppStoreContext = createContext<AppStore>(new AppStore());
