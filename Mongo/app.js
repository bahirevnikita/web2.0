const express = require('express')
const app = express()
const port = 4006
const router = require('./router')
app.use(express.json())

app.use('/', router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
