const express = require('express')
const app = express()
const port = 3000

app.post('/signup', (req, res) => {
  res.send('signup page!')
})
app.post('/login', (req, res) => {
    res.send('login page!')
})

app.get('/submitions', (req, res) => {
    res.send('submitions page!')
})
app.get('/questions', (req, res) => {
    res.send('Questions page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})