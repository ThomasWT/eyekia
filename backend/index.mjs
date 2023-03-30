import express from 'express';
import {client, connectToMongoDB} from './connectToDb.mjs'
import bodyParser from 'body-parser';
import cors from 'cors';

import usersRouter from './routes/users.mjs'
import authRouter from './routes/auth.mjs';
import statsRouter from './routes/stats.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
connectToMongoDB()

app.use('/auth', authRouter);
app.use('/stats', statsRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  console.log({type: req.method, path: req.path});
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// When the app is shutting down, close the MongoDB connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});