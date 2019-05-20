# Join Our Big Day API

---

## Database Schema

**Users**

- `id`: int, autoincrement (database provides it)
- `socialId`: string, unique, comes from Oauth (google/facebook) for authentication
- `email`: string, notNull, unique
- `username`: string, unique
- `password`: string
- `partnerName1`: string
- `partnerName2`: string
- `weddingParty`: string
- `venueLocation`: string
- `addressUrl`: string
- `weddingDate`: date
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
- `address`: string
- `code`: notNull

| Method | URL                 | Description                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
| GET    | /guest              | returns array of all guest in the db                                                                    |
| GET    | /guest/:id          | returns guest object with specified id                                                                  |
| GET    | /guest/auth/:code   | returns guest object with specified auth code                                                           |
| POST   | /guest              | adds a guest from req.body with firstName/lastName/email and returns new guest                          |
| PUT    | /guest/:id          | Updates the guest with the specified id using data from the request body. Returns the modified document |
| DELETE | /guest/:id          | Deletes the guest with the specified id returns success message when deleted                            |
| POST   | guest/:userId/email | Fires the sendgrid funtion to send invitation email to all guests under that userId                     |

### Guest Post schema

**Add new guest**

```js
{
  firstName: "fName", //string, required
  lastName: "lName", //string, required,
  email: "email@test.com" //string, required
}
```

---

**RSVP Questions**

- `id`: int, autoincrement (database provides it)
- `Question_body`: string
- `users_id`: int, references users.id
- `guestList_id`: int, references guestList.id

| Method | URL                                | Description                                                                                                              |
| ------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| GET    | /:id/questions                     | Returns a object with all the questions for that spcific userId                                                          |
| GET    | users/:id/questions                | Returns a object with all the questions and answer for that spcific userId                                               |
| POST   | /:user/addquestion                 | adds a QUESTION from req.body for that specific userId and returns new questions                                         |
| PUT    | /update-question/:user/:questionId | Updates the question with the specified user/question id using data from the request body. Returns the modified document |
| DELETE | /guest/:id                         | Deletes the guest with the specified id returns success message when deleted                                             |

---

**RSVP Answers**

- `id`: int, autoincrement (database provides it)
- `answer_body`: string
- `rsvpQuestions_id`: int, references rsvpQuestions.id
- `user_id`: int, references user.id
- `guestList_id`: int, references guestList.id

| Method | URL                | Description                                                        |
| ------ | ------------------ | ------------------------------------------------------------------ |
| GET    | /:id/questions     | Returns a object with all the answers for that spcific question id |
| POST   | /:user/addquestion | Adds the answer; has to include question Id                        |

---

**Registry**

- `id`: int, autoincrement (database provides it)
- `registryName`: string
- `registryUrl`: string
- `user_id`: int, references user.id

| Method | URL                           | Description                                                                     |
| ------ | ----------------------------- | ------------------------------------------------------------------------------- |
| GET    | /registry/:id                 | returns an array with each registry item for that specific user id if provided  |
| POST   | /registry/:user               | Adds the registry; has to include user Id                                       |
| PUT    | /registry/:userId/:registryId | Edits a specific registry on that registry id; has to include user Id           |
| DELETE | /registry/:id                 | Deletes the registry with the specified id returns success message when deleted |

**Custom Site**

- `id`: int, autoincrement (database provides it)
- `userUrl`: string, notNull
- `story`: string
- `propposalStory`: string
- `siteDesign`: int
- `user_id`: int, references user.id

| Method | URL                           | Description                                                                                                |
| ------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| GET    | /customSite/:siteUrl          | returns an object with Custom site and user info with that specific userUrl                                |
| GET    | /customSite/user/:userId      | returns an object with Custom site for the specific user id provided                                       |
| POST   | /customSite/user/:userId      | Adds a custom site tied to user id to the Database, returns success message if successful; requires userId |
| PUT    | /registry/:userId/:registryId | Edits a specific registry on that registry id; has to include user Id                                      |
| DELETE | /registry/:id                 | Deletes the registry with the specified id returns success message when deleted                            |
