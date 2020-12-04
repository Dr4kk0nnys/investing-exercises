import express from 'express';
import dotenv from 'dotenv';

// Config
const app = express();
dotenv.config();
const port = process.env.PORT;


app.listen(port, () => console.log(`Server listening on port ${port}`));
