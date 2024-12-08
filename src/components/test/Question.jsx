import React, { Fragment, useEffect, useState } from "react"
import './Quiz.css'
import { pythonQuestions } from "../../dummydata"



const Question = () => {

    return (
        <div className="quiz">
            <div className="quiz-container">
                <div className="circle"></div>
                <h1>Minor Exam </h1>
                <div className="timer" id="timer">Time Remaining: 60:00</div>


                {
                    pythonQuestions.map(
                        question => (
                            <div id="quiz">
                                <div className="question" id="question1">
                                    <p>{question.name}<br />
                                        <code>{question.code}</code></p>
                                    <p> {question.option.map(opt => (<Fragment>{opt} <br /></Fragment>))} </p>
                                    <input type="text" id="answer1" placeholder="Enter answer here" />
                                </div>
                                <button id="submitBtn">Submit Answers</button>
                                <div id="result" className="result"></div>
                                <div id="error" className="error"></div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Question
