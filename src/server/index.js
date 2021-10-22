const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8081
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'))

console.log(`Your API key is ${process.env.API_KEY}`);

console.log('dir:',__dirname)

app.get('/', (req, res) => {
    res.send('dist/index.html', { root: __dirname + '/..' })
})

app.get('/apikey', (req,res) => {
    res.json({API_KEY: process.env.API_KEY});
})

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
