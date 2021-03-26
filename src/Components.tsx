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

export type StylableProps = {
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
        <Link to="/people">People</Link>
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

export const AboutComponent = () => (
  <>
    <h2>About</h2>
    <p>
      Just some text... Just some text... Just some text... Just some text...
      Just some text...
    </p>
  </>
);

export const UsersComponent = ({ className }: StylableProps) => (
  <h2 className={className}>Users</h2>
);

export const Users = styled(UsersComponent)`
  background-color: papayawhip;
`;

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
