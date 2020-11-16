import express from 'express'
import cors from 'cors'
require('dotenv').config()

import { connectToDatabase } from './database'
import routes from './routes'

const app = express()

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333 || process.env.PORT, () => console.log('Server running'))