import express from 'express';
import cors from 'cors';
import { products } from './data/data.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});