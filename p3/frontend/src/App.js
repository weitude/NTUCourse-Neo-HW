import './App.css';
import React, {useEffect, useState} from 'react';
import {course} from './axios'
import CourseBox from "./components/CourseBox";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Container} from "./components/Container";

function App() {

    const [courseList, setCourseList] = useState({});
    const [cards, setCards] = useState([]);
    const [output, setOutput] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        getCourseList().then(() => console.log("ready!!!"))
    }, []);

    const getCourseList = async () => {
        const response = await course()
        setCourseList(response.courseList)
    }

    const addCard = (courseIdx) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        const len = cards.length;
        let check = true;
        for (let i = 0; i < len; i++) {
            if (cards[i]["id"] === courseIdx) {
                check = false;
                break;
            }
        }
        if (check) {
            newCards.push({
                id: courseIdx,
                text: courseList[courseIdx]["Course title"],
            })
            setCards(newCards)
        }
        else
            console.log("Exist!!!")
    }

    const leftPart = (
        <div>
            {Object.keys(courseList).map((courseIdx, idx) => {
                return (
                    <div
                        onClick={() => addCard(courseIdx)}
                        key={idx}
                    >
                        <CourseBox information={courseList[courseIdx]}/>
                    </div>
                )
            })}
        </div>
    )

    const outputCards = () => {
        setOutput(true)
        const len = cards.length;
        let s = 'Result: ["';
        if (len >= 1)
            s += cards[0]["text"]
        for (let i = 1; i < len; i++) {
            s += `","${cards[i]["text"]}`
        }
        s += '"]'
        setResult(s)
    }

    return (
        <div className="App">
            <div className="container">
                <div>
                    <h1>Course Information</h1>
                    <div>{leftPart}</div>
                </div>
                <div>
                    <h1>Course I Plan to Take</h1>
                    <div className="rightPart">
                        <button
                            type="button"
                            className="done"
                            onClick={outputCards}
                        >
                            Done
                        </button>
                        <div className="dnd">
                            <DndProvider backend={HTML5Backend}>
                                <Container cards={cards} setCards={setCards}/>
                            </DndProvider>
                        </div>
                    </div>
                </div>
                {output && <div className="result"><h3> {result} </h3></div>}
            </div>
        </div>
    );
}

export default App;
