import axios from "axios";

const config = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
};

const client = axios.create(config);

export function getPeople(ctx) {
  return client.get("/people").then(({ data }) => {
    ctx.setState({
      people: data
    });
  });
}

export function updatePeople(id, person) {
  return client.patch(`/people/${id}`, person);
}

export function createPeople(person) {
  return client.post(`/people`, person);
}

export function getPosts(ctx) {
  return client.get("/posts").then(({ data }) => {
    ctx.setState({
      posts: data
    });
  });
}

export function updatePosts(id, data) {
  return client.patch(`/posts/${id}`, data);
}

export function createPosts(data) {
  return client.post("/posts/", data);
}
