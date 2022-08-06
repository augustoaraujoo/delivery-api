import express from 'express'
const PORT = process.env.PORT || 6060;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World !');
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})