const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv').config()
    , massive = require('massive')
    , ctrl = require('./controlller')
    , app = new express()

app.use(bodyParser.json())
app.use(cors())


///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
// app.use((req, res, next) =>{
//     if(!req.session.user){
//         req.session.user = {
//             user_id: 1,
//             user_name: "harrison ford", 
//             email: "adventureBuilder2049@gmail.com", 
//             name: "adventure", 
//             profile_picture : "http://www.placekitten.com/200/250",
//             auth_id: "adsgfhaoibjmoi5wrhgiuaosfngiuasdhg;ioarhdgv;ou"
//         }
//     }
//     next();
// })

app.get('/api/test', (req, res) => {
    res.send('hello')
})


const port = process.env.port

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
        app.listen(port, _ => {
            console.log(`Worlds without end ${port}`)
        })
})