const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const postRoutes = require('./routes/postRoutes')
const errorHandler = require('./middleware/errorHandler')
const logger = require('./utils/logger')
const cors = require('cors')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/api', postRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
