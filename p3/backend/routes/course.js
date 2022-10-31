import express from 'express'
import course from '../course_list.json'
const router = express.Router()

router.get ('/', (_, res) => {
    res.send("<h1>This is 林佳緯's NTUCourse NEO HW Server</h1>")
})

router.post('/course', (_, res) => {
    res.json({courseList: course})
})
export default router;