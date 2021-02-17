import React, {useCallback} from 'react';
import './App.css';
import {ToDoList} from "./Todolist";

import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
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
    console.log("App")

    const todoLists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TaskStateType>(state => state.tasks)
    const dispatch = useDispatch()


    const removeTask = useCallback((taskID: string, todoListId: string) => {
        dispatch(removeTaskAC(taskID, todoListId))
    }, [dispatch])

    const addTask = useCallback((title: string, todoListId: string) => {
        dispatch(addTaskAC(title, todoListId))
    }, [dispatch])

    const changeStatus = useCallback((taskID: string, isDone: boolean, todoListId: string) => {
        dispatch(changeTaskStatusAC(taskID, isDone, todoListId))
    }, [dispatch])

    const changeTaskTitle = useCallback((taskID: string, title: string, todoListId: string) => {
        dispatch(changeTaskTitleAC(taskID, title, todoListId))
    }, [dispatch])

    const changeFilter = useCallback((filterValue: FilterValuesType, todoListId: string) => {
        dispatch(changeTodolistFilterAC(todoListId, filterValue))
    }, [dispatch])

    const removeTodolist = useCallback((id: string) => {
        dispatch(removeTodolistAC(id))
    }, [dispatch])

    const changeTodolistTitle = useCallback((title: string, todoListId: string) => {
        dispatch(changeTodolistTitleAC(title, todoListId))
    }, [dispatch])

    const addTodolist = useCallback((todolistTitle: string,) => {
        dispatch(addTodolistAC(todolistTitle))
    }, [dispatch])

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

