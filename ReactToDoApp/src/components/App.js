import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'


import './App.css';

class App extends Component {
  counter = 7
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac wreszcie w wiedzmina 1',
        date: '2018-04-15',
        important: true,
        active: false,
        finishedDate: new Date('2018-03-15')
      },
      {
        id: 1,
        text: 'zagrac wreszcie w wiedzmina 2',
        date: '2018-05-15',
        important: false,
        active: false,
        finishedDate: new Date('2018-04-15')
      },
      {
        id: 2,
        text: 'zagrac wreszcie w wiedzmina 3',
        date: '2018-07-16',
        important: false,
        active: false,
        finishedDate: new Date('2018-06-15')
      },
      {
        id: 3,
        text: 'zagrac wreszcie w wiedzmina 4',
        date: '2018-02-17',
        important: true,
        active: true,
        finishedDate: null
      },
      {
        id: 4,
        text: 'zagrac wreszcie w wiedzmina 5',
        date: '2019-02-15',
        important: false,
        active: true,
        finishedDate: null
      },
      {
        id: 5,
        text: 'zagrac wreszcie w wiedzmina 6',
        date: '2020-02-15',
        important: false,
        active: true,
        finishedDate: null
      }
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1)
    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks: tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishedDate = new Date().getTime()
      }
    })
    console.log(tasks)
    this.setState({
      tasks: tasks
    })
  }
  addTask = (text, date, important) => {

    const task = {
      id: this.counter++,
      text: text,
      date: date,
      important: important,
      active: true,
      finishedDate: null
    }
    // console.log(task, this.counter)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }
  render() {
    return (
      <div className="App">
       <h1>TODO APP</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
