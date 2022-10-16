import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import AddPerson from "./components/AddPerson/AddPerson";
import ListPeople from "./components/ListPeople/ListPeople";
import { v4 as uuid } from "uuid";

const title = "Telephone Directory";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const addToContacts = (person) => {
    setContacts(contacts.concat({ ...person, id: uuid() }));
  };
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="flex align-items-center justify-content-center container">
        <AddPerson addToContacts={addToContacts} />
        <ListPeople contacts={contacts} />
      </div>
    </div>
  );
};

export default App;
