import express,{json} from 'express'
import { UserModel } from './UserModel.js'
import { MongoClient } from "mongodb"

const app = express()
const port = 1111
app.use(json())

const connectionString = "mongodb+srv://devudhayakumar:devudhayakumar@cluster1427.cxjxou7.mongodb.net/?retryWrites=true&w=majority";
let db
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        db = client.db('Users')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        //userdetails = db.collection("UserDetail")
    })


app.post('/User', async (req, res) => {
    const user = { name: req.body.name }
    const newUser = new UserModel(req.body.name)
    console.log(newUser)
    await db.collection("UserDetail").insertOne(newUser).then((e) => {
        res.status(201).json({ message: "success" })

    }).catch((e) => {
        console.log(e)
        res.status(400).json({ message: "error" })
    })
})

app.get('/User', async (req, res) => {
    let filter = {}
    if (req.query.name) {
        filter.name = req.query.name
    }
    if (req.query.rollno) {
        filter.rollno = req.query.rollno
    }
    await db.collection("UserDetail").find(filter).toArray(
        function (err, result) {
            if (err) {
                res.status(400).json({ message: "Error fetching listings!" });
            } else {
                res.status(200).json({ message: "success", data: result });
            }
        })
})

