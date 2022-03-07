const express = require("express");
const cors = require("cors")
const app = express();
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
require('dotenv/config')

app.use(bodyParser.json())

//Import routes
const postsRoute = require(`../routes/posts`)

app.use('/posts', postsRoute)
app.use(cors());

app.use(express.json());


// const ctrl = require(`./controller.js`)

const port = process.env.PORT || 4000

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log(`connected to DB!`)
})

app.listen(port, () => console.log(`Listening on port ${port}`))

