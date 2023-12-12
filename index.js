const express = require('express')

const app = express()

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hola con GET!")
})

app.get('/', (req, res) => {
    res.send("Hola con POST!")
})

app.get('/', (req, res) => {
    res.send("Hola con PUT!")
})

app.get('/', (req, res) => {
    res.send("Hola con PATCH!")
})

app.get('/', (req, res) => {
    res.send("Hola con DELETE!")
})



app.listen(3000, () => (console.log('listening on port 3000')))