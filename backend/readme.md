# Simple backend service

This project uses `json-server` as a simple backend. The idea is that the user shouldn't need to touch anything inside `backend/` nor inside `src/api/` folders unless they want to start learning those particular things.

## Database

We use `backend/db.json` file to store data. A single JSON file makes it easy for us to create persistent database that's easy to read and write.

## API functions

Inside `src/api/apiClient.js` we define the functions to manipulate the data over HTTP.

## API Endpoints

If our `backend/db.json` looks like this:

```
{
    "people": [
        {
            "name": "John Smith",
            "age": 24
        },
        {
            "name": "Jane Doe",
            "age": 28
        }
    ]
}
```

you can access the data via following endpoints

| Top level key in JSON | Method | API endpoint | Parameters                |
| --------------------- | ------ | ------------ | ------------------------- |
| people                | GET    | /people/     |                           |
| people                | POST   | /people/     | JSON of the saved content |
| people                | PUT    | /people/{id} | JSON of the saved content |
| people                | PATCH  | /people/{id} | JSON of the added content |
| people                | DELETE | /people/{id} |                           |
