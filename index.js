const express = require('express');
const app = express();
const db = require('./config/db');

const routes = require('./routes/index')

app.use(express.json());

app.use('/api/v1', routes)

app.use('*', async (req, res) => {
    res.json({ status: 404, data: 'API Routes not found' })
})


app.listen(process?.env?.PORT ?? 5000, async () => {
    await db();
    console.log('Server started on port 5000')
})