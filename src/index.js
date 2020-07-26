import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// * Routes * // 
app.use('/json', routes.json);
app.use('/file', routes.files);

// * Start * //
app.listen(PORT, () =>
  console.log(`App is listening on port ${PORT}!`),
);
