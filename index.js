import express from 'express';
import bodyparser from 'body-parser';
import ideasRoutes from './routes/ideas.js'

const PORT = 5000
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/ideas', ideasRoutes)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is up on http://localhost:${PORT}`);
})