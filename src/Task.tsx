import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./App";


type TaskPropsType = {
    todolistId: string
    task: TaskType
    changeTaskTitle: (taskID: string, title: string, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeStatus: (taskID: string, isDone: boolean, todoListId: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {
    console.log('Task')
    const removeTask = () => {
        props.removeTask(props.task.id, props.todolistId)
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked, props.todolistId)
    }
    const changeTitle = useCallback((title: string) => {
        props.changeTaskTitle(props.task.id, title, props.todolistId)
    }, [props.changeTaskTitle, props.task.id, props.todolistId])
    return (
        <div className={props.task.isDone ? "is-done" : ""}>
            <Checkbox
                color={"primary"}
                onChange={changeStatus}
                checked={props.task.isDone}
            />
            <EditableSpan title={props.task.title} changeTitle={changeTitle}/>
            <IconButton onClick={removeTask}>
                <Delete/>
            </IconButton>
        </div>
    )
})