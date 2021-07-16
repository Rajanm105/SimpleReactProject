require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConfig = require('./config/dbconfig');
const demo = require('./controllers/samplecontroller');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome to Appointment App')
});


dbConfig.connect();

app.use('/api/demo', demo);


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});