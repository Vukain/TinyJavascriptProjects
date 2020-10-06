import React from 'react';
import Task from './Task'


const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => task.active !== true)

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase()
            b = b.text.toLowerCase()
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            }
            else return 0
        })
    }

    if (done.length >= 2) {
        done.sort((a, b) => b.finishedDate - a.finishedDate)
    }

    const activeTasks = active.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)

    const doneTasks = done.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)

    return (
        <>
            <div className="active">
                <h2>Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p>brak zadań</p>}
            </div>
            <div className="done">
                <h3>Zadania do zrobienia <em>({done.length})</em></h3>
                {done.length > 5 && <span style={{ fontSize: 10 }}>wyswietlonych jest jedynie 5 ostatnich elementów</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;