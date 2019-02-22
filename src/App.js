import React, { Component } from "react";
import logo from "./logo.svg";
import { getPeople, createPeople, deletePeople } from "./api/apiClient";
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
    getPeople().then(({ data }) => {
      this.setState({
        people: data
      });
    });
  };

  deletePeople = id => {
    deletePeople(id).then(() => {
      const { people } = this.state;
      this.setState({
        people: people.filter(person => person.id !== id)
      });
    });
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people } = this.state;

    const addPerson = () => {
      const person = { name: this.state.newPersonName, age: 20 };
      createPeople(person).then(res => {
        this.setState({
          people: [...this.state.people, res.data]
        });
      });
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name}{" "}
                <span onClick={() => this.deletePeople(person.id)}>x</span>
              </li>
            ))}
          </ul>
          <label htmlFor="name">Add new person</label>{" "}
          <input
            id="name"
            onChange={ev =>
              this.setState({
                newPersonName: ev.target.value
              })
            }
          />{" "}
          <button onClick={() => addPerson()}>Add</button>
        </header>
      </div>
    );
  }
}

export default App;
