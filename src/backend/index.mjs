import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './db.mjs'
import postRoutes from './postRoutes.mjs'
import errorHandler from './errorHandler.mjs'
import logger from './logger.mjs'
import cors from 'cors'

dotenv.config({ path: path.resolve(process.cwd(), './src/.env') }) // Load environment variables

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
