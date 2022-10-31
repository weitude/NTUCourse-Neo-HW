import express from 'express'
import cors from 'cors'
import { createRequire } from "module";
const require = createRequire(import.meta.url); // construct the require method
const course_list = require('./course_list.json') // use the require method
const router = express.Router()

router.get ('/', (_, res) => {
    res.send("<h1>This is 林佳緯's NTUCourse NEO HW Server</h1>")
})

router.post('/course', (_, res) => {
    res.json({courseList: course_list})
})

const app = express()

app.use(cors())
app.use('/api/neo', router)
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})