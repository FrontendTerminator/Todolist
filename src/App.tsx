import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./Todolist";
import {v1} from 'uuid';
import AddItemForm from "./AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed"

type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    // BLL:
    const todoListID1 = v1()
    const todoListID2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todoListID1, title: "What to learn", filter: "all"},
        {id: todoListID2, title: "What to buy", filter: "all"}
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
            [todoListID1]: [
                {id: v1(), title: "HTML", isDone: false},
                {id: v1(), title: "CSS", isDone: true},
                {id: v1(), title: "JS", isDone: false}
            ],
            [todoListID2]: [
                {id: v1(), title: "React", isDone: true},
                {id: v1(), title: "Redux", isDone: false},
                {id: v1(), title: "graphQL", isDone: true}
            ]
        }
    )

    function removeTask(taskID: string, todoListId: string) {
        const todoListTasks = tasks[todoListId]

        tasks[todoListId] = todoListTasks.filter(task => task.id !== taskID)
        setTasks({...tasks})
    }

    function changeFilter(filterValue: FilterValuesType, todoListId: string) {
        const todoList = todoLists.find(tl => tl.id === todoListId)
        if (todoList) {
            todoList.filter = filterValue
            setTodoLists([...todoLists])
        }
    }

    function addTask(title: string, todoListId: string) {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        tasks[todoListId] = [newTask, ...tasks[todoListId]]
        setTasks({...tasks})
    }

    function changeStatus(taskID: string, isDone: boolean, todoListId: string) {
        const todoListTasks = tasks[todoListId]
        const task = todoListTasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeTaskTitle(taskID: string, title: string, todoListId: string) {
        const todoListTasks = tasks[todoListId]
        const task = todoListTasks.find(t => t.id === taskID)
        if (task) {
            task.title = title
            setTasks({...tasks})
        }
    }

    function changeTodolistTitle(title: string, todoListId: string) {
        const todolist = todoLists.find(tl => tl.id === todoListId)
        if (todolist) {
            todolist.title = title
            setTodoLists([...todoLists])
        }
    }

    function addTodolist(todolistTitle: string, ) {
        const todolistId = v1()
        const newTodolist: TodolistType = {
            id: todolistId,
            title: todolistTitle,
            filter: "all"
        }
        setTodoLists([...todoLists, newTodolist])
        setTasks({
            ...tasks,
            [todolistId]: []
        })
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist} />
            {
                todoLists.map(tl => {

                    let tasksForTodoList = tasks[tl.id]
                    if (tl.filter === "active") {
                        tasksForTodoList = tasks[tl.id].filter(t => t.isDone === false)
                    }
                    if (tl.filter === "completed") {
                        tasksForTodoList = tasks[tl.id].filter(t => t.isDone === true)
                    }

                    return (
                        <ToDoList
                            key={tl.id}
                            id={tl.id}
                            filter={tl.filter}
                            title={tl.title}
                            tasks={tasksForTodoList}
                            addTask={addTask}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            changeStatus={changeStatus}
                            changeTaskTitle={changeTaskTitle}
                            changeTodolistTitle={changeTodolistTitle}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;

