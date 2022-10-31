import express from 'express'
import cors from 'cors'
import guessRoute from './routes/course'
const app = express()

app.use(cors())
// define routes
app.use('/api/neo', guessRoute)
// define server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})