import express from 'express';
import bodyParser from 'body-parser';
import * as users from './users/users';

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})