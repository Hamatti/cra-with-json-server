# react-app-with-backend

This project is a skeleton for frontend React workshops. The motivation for this was to create something that ships with a simple backend and API functionality for it so that the participant can focus on frontend only.

## Frontend

This is a create-react-app project. You can refer to documentation there for any frontend related matters.

## Backend / API speciality

This starter kit ships with `json-server` and simple JSON backend, [documented here](/backend/readme.md).

### npm run generateAPI [model name]

You can generate new API endpoints and "database" storage with `npm run generateAPI [model name]` where `[model name]` should be a plural of your object noun. For example, to save a collection of posts, you run `npm run generateAPI posts`.

This will add `"posts": []` into `backend/db.json` storage as well as `getPosts(ctx)`, `updatePosts(id, data)`, `deletePosts(id)`, and `createPosts(data)` functions in `apiClient.js`.
