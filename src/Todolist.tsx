import React, {ChangeEvent, useCallback} from "react";
import {FilterValuesType, TaskType} from "./App";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {AddItemForm} from "./AddItemForm";
import {Task} from "./Task";

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTodolist: (id: string) => void
    addTask: (title: string, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeTodolistTitle: (title: string, todoListId: string) => void
    changeFilter: (filterValue: FilterValuesType, todoListId: string) => void
    changeStatus: (taskID: string, isDone: boolean, todoListId: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListId: string) => void
}

export const ToDoList = React.memo((props: PropsType) => {
    console.log('Todolist')
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    },[props.addTask, props.id])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(title, props.id)
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id),[props.changeFilter, props.id])
    const onActiveClickHandler = useCallback(() => {
        props.changeFilter("active", props.id)
    },[props.changeFilter,props.id])
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id),[props.changeFilter, props.id])

    let tasksForTodolist = props.tasks

    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false)
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true)
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    tasksForTodolist.map(t => {
                        return <Task
                            key={t.id}
                            task={t}
                            todolistId={props.id}
                            changeTaskTitle={props.changeTaskTitle}
                            removeTask={props.removeTask}
                            changeStatus={props.changeStatus}
                            />
                    })
                }
            </div>
            <div>
                <Button
                    color={"default"}
                    variant={props.filter === "all" ? "contained" : "outlined"}
                    onClick={onAllClickHandler}>All
                </Button>
                <Button
                    color={"primary"}
                    variant={props.filter === "active" ? "contained" : "outlined"}
                    onClick={onActiveClickHandler}>Active
                </Button>
                <Button
                    color={"secondary"}
                    variant={props.filter === "completed" ? "contained" : "outlined"}
                    onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    )
})

