const express = require("express");
const cors = require("cors")
const app = express();
const bodyParser = require(`body-parser`)
const path = require(`path`)
require('dotenv/config')

app.use(bodyParser.json())


app.use(cors());
let id = 2
let characters = [
    {
    champName: 'DRAVEN',
    id: 1
    }
]
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')))
app.get('/api/champlist', (req, res) => {
    console.log('hit chars')
    res.status(200).send(characters)
})
app.get('/character/:name', (req, res) => {
    const { name } = req.params
    const index = characters.findIndex(char => char.champName.toLowerCase() === name)
    res.status(200).send(characters[index])
})
app.post('/api/champlist', (req, res) => {
    let newChar = {...req.body, id}
    characters.unshift(newChar)
    res.status(200).send(characters)
    id++
})


const port = process.env.PORT || 4000


app.listen(port, () => console.log(`Listening on port ${port}`))

