const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const brandController = require('./controllers/brandController')
const denimController = require('./controllers/denimController')


const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())

//show routes app.get
app.get('/', (req, res) => res.send('I am the root yo!'))

//brand routes
app.get('/brands', brandController.getAllBrands)
app.get('/brands/:id', brandController.getBrandById)
app.post('/brands', brandController.createBrand)
app.put('/brands/:id', brandController.updateBrand)
app.delete('/brands/:id', brandController.deleteBrand)

//denim routes
app.get('/denims', denimController.getAllDenim)
app.get('/denims/:id', denimController.getDenimById) // 3sixteenID: 65246d89ea900b36621728ab
app.post('/denims', denimController.createDenim)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))