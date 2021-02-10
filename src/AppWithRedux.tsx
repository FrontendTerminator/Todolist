import React, {useReducer, useState} from 'react';
import './App.css';
import {ToDoList} from "./Todolist";
import {v1} from 'uuid';
import AddItemForm from "./AddItemForm";
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
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

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

function App() {

    const todoLists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TaskStateType>(state => state.tasks)
    const dispatch = useDispatch()


    function removeTask(taskID: string, todoListId: string) {
        dispatch(removeTaskAC(taskID, todoListId))
    }

    function addTask(title: string, todoListId: string) {
        dispatch(addTaskAC(title, todoListId))
    }

    function changeStatus(taskID: string, isDone: boolean, todoListId: string) {
        dispatch(changeTaskStatusAC(taskID, isDone, todoListId))
    }

    function changeTaskTitle(taskID: string, title: string, todoListId: string) {
        dispatch(changeTaskTitleAC(taskID, title, todoListId))
    }

    function changeFilter(filterValue: FilterValuesType, todoListId: string) {
        dispatch(changeTodolistFilterAC(todoListId, filterValue))
    }

    function removeTodolist(id: string) {
        dispatch(removeTodolistAC(id))
    }

    function changeTodolistTitle(title: string, todoListId: string) {
        dispatch(changeTodolistTitleAC(title, todoListId))
    }

    function addTodolist(todolistTitle: string,) {
        dispatch(addTodolistAC(todolistTitle))
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

export default App;

