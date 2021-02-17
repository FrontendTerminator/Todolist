import React, {useReducer, useState} from 'react';
import './App.css';
import {ToDoList} from "./Todolist";
import {v1} from 'uuid';

import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todoListsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {AddItemForm} from "./AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed"

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {
    // BLL:
    const todoListID1 = v1()
    const todoListID2 = v1()

    const [todoLists, dispatchToTodoLists] = useReducer(todoListsReducer,[
        {id: todoListID1, title: "What to learn", filter: "all"},
        {id: todoListID2, title: "What to buy", filter: "all"}
    ])

    const [tasks, dispatchToTasks] = useReducer(tasksReducer,{
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
        dispatchToTasks(removeTaskAC(taskID, todoListId))
    }

    function addTask(title: string, todoListId: string) {
        dispatchToTasks(addTaskAC(title, todoListId))
    }

    function changeStatus(taskID: string, isDone: boolean, todoListId: string) {
        dispatchToTasks(changeTaskStatusAC(taskID, isDone, todoListId))
    }

    function changeTaskTitle(taskID: string, title: string, todoListId: string) {
       dispatchToTasks(changeTaskTitleAC(taskID, title, todoListId))
    }

    function changeFilter(filterValue: FilterValuesType, todoListId: string) {
        dispatchToTodoLists(changeTodolistFilterAC(todoListId, filterValue))
    }

    function removeTodolist(id: string) {
        const action = removeTodolistAC(id)
        dispatchToTasks(action)
        dispatchToTodoLists(action)
    }

    function changeTodolistTitle(title: string, todoListId: string) {
        dispatchToTodoLists(changeTodolistTitleAC(title, todoListId))
    }

    function addTodolist(todolistTitle: string,) {
        const action = addTodolistAC(todolistTitle)
        dispatchToTodoLists(action)
        dispatchToTasks(action)
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "10px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todoLists.map(tl => {

                            let tasksForTodoList = tasks[tl.id]
                            if (tl.filter === "active") {
                                tasksForTodoList = tasks[tl.id].filter(t => t.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodoList = tasks[tl.id].filter(t => t.isDone === true)
                            }

                            return <Grid item>
                                <Paper elevation={3} style={{padding: "10px"}}>
                                    <ToDoList
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        addTask={addTask}
                                        filter={tl.filter}
                                        removeTask={removeTask}
                                        tasks={tasksForTodoList}
                                        changeFilter={changeFilter}
                                        changeStatus={changeStatus}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;

