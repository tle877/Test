import React from "react"
import Intro from "./Intro.js"
import Main from "./Main.js"
export default function App(){
    const [start,setStart] = React.useState(false)
    function isStart(){
        setStart(prev => !prev)
    }
    //----------API get all quest-----------
    const [questionData,setQuestionData] = React.useState([1,2])
    
    
       React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data =>setQuestionData(data))
    }, [])

    
    //questionData.result.   questions/correct_answer/incorrec_answer
    
    // const mainElement = questionData.map(ele => {
    //     <Main incorrect={ele.incorrect_answers}
    //           correct = {ele.correct_answer}
    //           ques= {ele.question} />
    // })           
                       
    //----------display question-----------
    //console.log(questionData)
    return (
        <div>
             {!start && <Intro isStart = {isStart}/>}
             {start && <Main allquestion = {questionData}
                             setQuestionData = {setQuestionData}  />}
                             
             
        </div>
    )
        
}