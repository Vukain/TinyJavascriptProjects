import React from 'react';


const Task = (props) => {

    const { text, date, id, active, important, finishedDate } = props.task;
    const style = {
        color: 'red',
    }

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>
                        {text} - do <span> {date} </span>
                    </strong>
                    <button onClick={() => props.change(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const finished = new Date(finishedDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong>
                        {text}
                    </strong><em> (zrobic do {date})</em> <br /> - potwierdzenie wykonania <span>{finished} </span>

                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    }
}

export default Task;