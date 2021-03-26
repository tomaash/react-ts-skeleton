import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppStoreContext, StarWarsPerson } from "./AppStore";
import { StylableProps } from "./Components";

const PeoplePageComponent = observer(({ className }: StylableProps) => {
  const appStore = useContext(AppStoreContext);
  useEffect(() => {
    appStore.loadPeople();
  }, [appStore]);
  return (
    <div className={className}>
      <h1>Listing people</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Mass</td>
          </tr>
        </thead>
        <tbody>
          {appStore.people.map((p) => (
            <PeopleTableRow person={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

const PeopleTableRowComponent = ({
  person,
  className,
}: {
  person: StarWarsPerson;
  className?: string;
}) => (
  <tr className={className}>
    <td>{person.name}</td>
    <td>{person.mass}</td>
  </tr>
);

const PeopleTableRow = styled(PeopleTableRowComponent)`
  font-style: italic;
`;

export const PeoplePage = styled(PeoplePageComponent)`
  background-color: whitesmoke;
  padding: 2rem;
  td {
    padding: 0rem 1rem 1rem 0rem;
  }
  thead {
    td {
      font-weight: bold;
    }
  }
`;
