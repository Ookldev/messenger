// Imports
import { port } from './_helpers/config'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

// Init app
const app = express()

// Set up middleware
app.use(helmet({
    referrerPolicy: {
        policy: 'no-referrer'
    }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
// app.use('/api', require('./routes/api/router'))

app.listen(port, () => {
  console.log(`[OK] Server is running on port ${port}`)
})