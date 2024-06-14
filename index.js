// import dotenv from 'dotenv'
// import app from "./server.js"
// import mongodb from "mongodb"
// //import ReviewsDAO from "./dao/reviewsDAO.js"


// const MongoClient = mongodb.MongoClient
// const mongo_username = process.env['MONGO_USERNAME']
// const mongo_password= process.env['MONGO_PASSWORD']
// const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.3uqn3pf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const port = 8000

// MongoClient.connect(
//     uri,
//     {
//         maxPoolSize : 50,
//         wtimeoutMS : 2500,
//         useNewUrlParser : true
//     }
// ).catch(err=>{
//     console.error(err.stack)
//     process.exit(1)
// })
// .then(async client => {
//     app.listen(port, ()=>{
//         console.log(`listening on port ${port}`)
//     })
// })



import dotenv from 'dotenv';
import app from "./server.js";
import mongodb from "mongodb"
//import { MongoClient } from 'mongodb';

dotenv.config();

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password= process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.3uqn3pf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const port = 8000

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    maxPoolSize: 50,
    serverApi: {
        version: '1', // Set the API version if required
        strict: true,
        deprecationErrors: true
    }
});

client.connect()
    .then(() => {
        console.log("Connected to MongoDB successfully");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit with error
    });
