const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  res.send(person)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})