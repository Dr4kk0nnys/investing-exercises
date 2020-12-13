import express from 'express';
import dotenv from 'dotenv';

// Routes
import index from './routes/index';

// Config
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/index', index);

app.listen(port, () => console.log(`Server listening on port ${port}`));
