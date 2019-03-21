# Join Our Big Day API

---

## Database Schema

**Users**

- `id`: int, autoincrement (database provides it)
- `socialId`: string, unique, comes from Oauth (google/facebook) for authentication
- `email`: string, notNull, unique
- `username`: string, unique
- `password`: string
- `weddingParty`: string
- `venueLocation`: string
- `isPremium`: bool, default(false)

| Method | URL                  | Description                                                                                            |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------ |
| GET    | /users               | returns array of all users in the db                                                                   |
| GET    | /users/:id           | returns user object with specified id                                                                  |
| PUT    | /users/:id           | Updates the user with the specified id using data from the request body. Returns the modified document |
| POST   | /auth/register-login | if username exist, it is authenticated,otherwise if an email is provided it will register the user     |

### Users Post schema

**register**

```js
{
  username: "username", //string, req, 5-20 characters
  password: "password1", //string, req, min 6 characters, has to contain atleast 1 number
  email: "email@test.com" //string, has to have valid email format
}
```

**login**

```js
{
  username: "username", //string, req, 5-20 characters
  password: "password1" //string, req, min 6 characters, has to contain atleast 1 number
}
```

---

**Guestlist**

- `id`: int, autoincrement (database provides it)
- `firstName`: string, notNull
- `lastName`: string, notNull
- `email`: string, notNull, unique
- `userId`: int, references users.id
- `rsvp`: bool, default(null)
- `rsvpMaybe`: bool, default(false)
- `rsvpComment`: string

| Method | URL        | Description                                                                                             |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------- |
| GET    | /guest     | returns array of all guest in the db                                                                    |
| POST   | /guest     | adds a guest from req.body with firstName/lastName/email and returns new guest                          |
| GET    | /guest/:id | returns guest object with specified id                                                                  |
| PUT    | /guest/:id | Updates the guest with the specified id using data from the request body. Returns the modified document |

### Guest Post schema

**Add new guest**

```js
{
  firstName: "fName", //string, required
  lastName: "lName", //string, required,
  email: "email@test.com" //string, required
}
```
