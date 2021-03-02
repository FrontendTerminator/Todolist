import React from "react";
import {TaskType} from "./App";
import {Meta, Story} from "@storybook/react";
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";

type TaskPropsType = {
    todolistId: string
    task: TaskType
    changeTaskTitle: (taskID: string, title: string, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeStatus: (taskID: string, isDone: boolean, todoListId: string) => void
}

export default {
    title: 'TodoList/Task',
    component: Task
} as Meta


const changeStatusCallback = action('Status changed inside Task')
const changeTaskTitleCallback = action('Title changed')
const removeTaskCallback = action('Remove Button inside Task clicked')

const Template: Story<TaskPropsType> = (args) => <Task {...args}/>

const baseArgs = {
    changeStatus: changeStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback
}

export const TaskIsDoneExample = Template.bind({})
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind({})
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: false, title: 'JS'},
    todolistId: 'todolistId1'
}


