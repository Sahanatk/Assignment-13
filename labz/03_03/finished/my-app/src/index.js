import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
    total: 50,
    lowerBody: 20,
    upperBody: 10,
    goal: 90
}

class ExerciseDayCounter extends Component {
    render() {
        const {total, lowerBody, upperBody, goal} = this.props
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
                    <p>Goal: {goal}</p>
                </div>
            </section>
        )
    }
}

render(<ExerciseDayCounter
    total={exerciseData.total}
    lowerBody={exerciseData.lowerBody}
    upperBody={exerciseData.upperBody}
    goal={exerciseData.goal} />, document.getElementById('root'))