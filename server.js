const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/routes')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api_phr', apiRouter);


app.listen(process.env.PORT || '3000', () => {
    console.log("server running di port: 3000");
})