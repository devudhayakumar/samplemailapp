import express from 'express'
import { MongoClient } from "mongodb"
const app = express()
let db
const port = 1111
const connectionString = "mongodb+srv://devudhayakumar:devudhayakumar@cluster1427.cxjxou7.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        db = client.db('Users')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        //userdetails = db.collection("UserDetail")
    })

export {db}