const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./src/backend/db')
const postRoutes = require('./src/backend/postRoutes')
const errorHandler = require('./src/backend/errorHandler')
const logger = require('./src/backend/logger')
const cors = require('cors')

dotenv.config({ path: path.resolve(__dirname, './src/.env') }) // Load environment variables

// Connect to database
connectDB().catch((error) => {
  console.error('Error connecting to the database', error)
  process.exit(1)
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

// Routes
app.use('/api', postRoutes)

// Error Handler Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
