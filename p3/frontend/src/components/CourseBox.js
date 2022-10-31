import './css/CourseBox.css'

export default function CourseBox({information}) {

    return (
        <div className="box">
            <h4 className="title">{information["Course title"]}</h4>
            <div className="credits">{information["Credits"]} Credits</div>
            <div className="instructor">{information["Instructor"]}</div>
            <div className="number">{information["Curriculum Number"]}</div>
        </div>
    );
}