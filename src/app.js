const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/fire', (req, res) => {
    res.render('fire')
})
app.get('/safety', (req, res) => {
    res.render('safety')
})

app.get('/alarm', (req, res) => {
    res.render('alarm')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})





