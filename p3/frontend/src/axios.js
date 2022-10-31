import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:4000/api/neo'})

const course = async () => {
    const {data: {courseList}} = await instance.post('/course')
    return {courseList}
}

export {course}