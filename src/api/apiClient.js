import axios from "axios";

const config = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
};

const client = axios.create(config);

export function getPeople() {
  return client.get("/people");
}

export function updatePeople(id, data) {
  return client.patch(`/people/${id}`, data);
}

export function createPeople(data) {
  return client.post("/people/", data);
}

export function deletePeople(id) {
  return client.delete(`/people/${id}`);
}
