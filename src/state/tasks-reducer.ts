import {TaskStateType, TaskType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskID: string
    todoListId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todoListId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    isDone: boolean
    todoListId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todoListId: string
}

export type TasksReducerActionType = RemoveTaskActionType | AddTaskActionType |
    ChangeTaskStatusActionType | ChangeTaskTitleActionType |
    AddTodolistActionType | RemoveTodolistActionType

export function tasksReducer(state: TaskStateType, action: TasksReducerActionType) {
    switch (action.type) {
        case "REMOVE-TASK":{
            const stateCopy = {...state}
            stateCopy[action.todoListId] = stateCopy[action.todoListId].filter(t => t.id !== action.taskID)
            return stateCopy
        }
        case 'ADD-TASK':{
            let task: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            return {
                ...state,
                [action.todoListId]: [task, ...state[action.todoListId]]
            }
        }
        case "CHANGE-TASK-STATUS":{
            const stateCopy = {...state}
            const todoListTasks = stateCopy[action.todoListId]
            const task = todoListTasks.find(t => t.id === action.taskId)
            if (task) {
               task.isDone = action.isDone
            }
            return stateCopy
        }
        case "CHANGE-TASK-TITLE":{
            const stateCopy = {...state}
            const todoListTasks = stateCopy[action.todoListId]
            const task = todoListTasks.find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
        }
        case "ADD-TODOLIST":{
            return {
                ...state,
                [action.todoListId]: []
            }
        }
        case "REMOVE-TODOLIST":{
            const stateCopy = {...state}
            delete stateCopy[action.todolistId]
            return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskID: string, todoListId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK',taskID, todoListId }
}
export const addTaskAC = (title: string, todoListId: string): AddTaskActionType => {
    return {type: 'ADD-TASK',title, todoListId }
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todoListId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todoListId }
}
export const changeTaskTitleAC = (taskId: string, title: string, todoListId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, todoListId }
}