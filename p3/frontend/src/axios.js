import axios from 'axios'

const instance = axios.create({baseURL: 'https://weitude-ntucourse-neo-hw.herokuapp.com/api/neo'})

const course = async () => {
    const {data: {courseList}} = await instance.post('/course')
    return {courseList}
}

export {course}