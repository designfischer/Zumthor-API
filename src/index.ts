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

app.listen(process.env.PORT || 3333, () => console.log('Server running'))