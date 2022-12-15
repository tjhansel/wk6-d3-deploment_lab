const express = require('express')
const cors= require('cors')
const path = require('path')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9a65e1e82d8b4d4ca243057b5d5b316a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})



const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.static(`/public`))
app.use(express.static(`./public`))

rollbar.log('EC2 Test')

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error)
//     rollbar.log(error)
//   }


app.listen(4000, console.log("Server Running on 4000"))