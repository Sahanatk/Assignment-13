import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
    total: 50,
    lowerBody: 20,
    upperBody: 10,
    cardio: 20,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal)
}

const ExerciseDayCounter = ({total, upperBody, lowerBody, cardio, goal}) => {
    return (
        <section>
            <div>
                <p>Exercise Days: {total}</p>
            </div>
            <div>
                <p>Lower Body Days: {lowerBody}</p>
            </div>
            <div>
                <p>Upper Body Days: {upperBody}</p>
            </div>
            <div>
                <p>Cardio Days: {cardio}</p>
            </div>
            <div>
                <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
            </div>
        </section>
    )
}

render(<ExerciseDayCounter
    total={exerciseData.total}
    lowerBody={exerciseData.lowerBody}
    upperBody={exerciseData.upperBody}
    cardio={exerciseData.cardio}
    goal={exerciseData.goal} />, document.getElementById('root'))