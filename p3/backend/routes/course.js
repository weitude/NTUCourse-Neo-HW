import express from 'express'
import course from '../course_list.json'
const router = express.Router()

router.post('/course', (_, res) => {
    res.json({courseList: course})
})
export default router;