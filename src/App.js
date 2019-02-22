import React, { Component } from "react";
import logo from "./logo.svg";
import { getPeople, updatePeople, createPeople } from "./api/apiClient";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      newPersonName: ""
    };
  }

  getPeople = () => {
    getPeople(this);
  };

  componentWillMount() {
    this.getPeople();
  }

  componentDidUpdate() {
    this.getPeople();
  }

  render() {
    const { people } = this.state;

    const addPerson = () => {
      createPeople({ name: this.state.newPersonName, age: 10 });
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {people.map(person => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
          <label htmlFor="name">Add new person</label>{" "}
          <input
            id="name"
            onChange={ev => this.setState({ newPersonName: ev.target.value })}
          />{" "}
          <button onClick={() => addPerson()}>Add</button>
        </header>
      </div>
    );
  }
}

export default App;
