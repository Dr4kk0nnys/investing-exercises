import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

// Routes
import polls from './routes/polls';

// Config
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index'));
app.use('/polls', polls);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
