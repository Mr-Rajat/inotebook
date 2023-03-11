// // const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
// const uri = "mongodb://localhost:27017"
// // const uri rs= 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect((err) => {
//     if (err) {
//       console.log('Failed to connect to MongoDB:', err);
//       return;
//     }else{
//     console.log('Connected to MongoDB');

//     }
    
//     // Connection successful
   
   
// })  

// module.exports ={client} ;

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/inotebook"
// console.log(process.env.URI);
exports.connect=()=>{
    mongoose.connect(
        uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ).then(()=>{
        console.log("db connected")
      }).catch(err=>{
        console.log('connection failed')
        console.log(err)
        process.exit(1)
      })  
}