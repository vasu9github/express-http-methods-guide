import express from 'express';
import posts from './Routes/posts.js';
import logger from './Routes/middleware/logger.js';
const app = express();

// logger middleware

app.use(logger);

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/posts',posts);

app.listen(PORT,() => {
    console.log(`Server is running at port : ${PORT}`);
});