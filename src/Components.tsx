import { observer } from "mobx-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppStoreContext } from "./AppStore";

export const AppWrapper = styled.section`
  padding: 2em;
  background: white;
  display: flex;
  flex-direction: column;
`;

type StylableProps = {
  className?: string;
  children?: any;
};

const NavBarComponent = ({ className }: StylableProps) => (
  <nav className={className}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
);

export const NavBar = styled(NavBarComponent)`
  ul {
    list-style-type: none;
    padding-inline-start: 0;
    li {
      display: inline-block;
      background-color: lightgray;
      margin: 5px;
      padding: 5px;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

export const CounterView = observer(() => {
  const appStore = useContext(AppStoreContext);
  return (
    <div>
      <h1>This is a counter</h1>
      <div>Number of clicks: {appStore.cnt}</div>
      <button onClick={() => appStore.inc()}>Click!</button>
    </div>
  );
});
