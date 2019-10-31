const express = require('express')
const bodyParser = require('body-parser')
const { Author, Book } = require('./sequelize')
const app = express()
app.use(bodyParser.json())

app.get('', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
    }));

// Create a restaurant
app.post('/rest', (req, res) => {
console.log(req.body)
restaurant.create(req.body)
.then(restaurants => res.json(restaurants))
})

// create an employee
app.post('/emp', (req, res) => {
console.log("employee", req.body)
employee.create(req.body)
.then(employee => res.json(employee))
})
// get all books
app.get('/allrest', (req, res) => {
restaurant.findAll().then(restaurant =>
res.json(restaurant))
})
// get all authors
app.get('/allemp', (req, res) => {
employee.findAll().then(employees =>
res.json(employees))
})

// get book by  bookId
app.get('/rest/:id', (req, res) => {
restaurant.findOne(
{
where: { id: req.params.storeID, },
}
).then(restaurant => res.json(restaurant))
})

// get author by id
app.get('/emp/:id', (req, res) => {
employee.findOne(
{
where: { id: req.params.employeeID, },
}
).then(employee => res.json(employee))
})

const port = 12000
app.listen(port, () => {console.log(`Running on http://localhost:${port}`)
})