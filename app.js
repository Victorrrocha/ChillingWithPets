const express = require('express')
const app = express()
const port = 80
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Started listening on port ${port}`)
})