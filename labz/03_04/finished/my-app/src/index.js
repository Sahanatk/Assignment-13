import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
    total: 50,
    lowerBody: 20,
    upperBody: 10,
    cardio: 20,
    goal: 100
}

class ExerciseDayCounter extends Component {
    getPercent = decimal => {
        return decimal * 100 + '%'
    }

    calcGoalProgress = (total, goal) => {
        return this.getPercent(total / goal)
    }

    render() {
        const {total, lowerBody, upperBody, cardio, goal} = this.props
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
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
                </div>
            </section>
        )
    }
}

render(<ExerciseDayCounter
    total={exerciseData.total}
    lowerBody={exerciseData.lowerBody}
    upperBody={exerciseData.upperBody}
    cardio={exerciseData.cardio}
    goal={exerciseData.goal} />, document.getElementById('root'))