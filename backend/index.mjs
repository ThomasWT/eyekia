import express from 'express';
import {client, connectToMongoDB} from './connectToDb.mjs'
import bodyParser from 'body-parser';
import cors from 'cors';

import usersRouter from './routes/users.mjs'
import authRouter from './routes/auth.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
connectToMongoDB()

app.use('/auth', authRouter);
app.use("/users", usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});