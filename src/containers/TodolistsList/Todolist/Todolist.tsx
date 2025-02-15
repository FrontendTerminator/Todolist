import React, { useEffect, FC, memo } from "react";
import { AddItemForm } from "../../../components/AddItemForm/AddItemForm";
import { EditableSpan } from "../../../components/EditableSpan/EditableSpan";
import { Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Task } from "./components/Task/Task";

import {
  FilterValuesType,
  TodolistDomainType,
} from "../../../store/todolist-reducer/todolists-reducer";
import { useDispatch } from "react-redux";
import { fetchTasksTC } from "../../../store/tasks-reducer/tasks-reducer";
import { Wrapper } from "./styles";
import { TaskStatuses, TaskType } from "../../../api/types";

type TodolistProps = {
  todolist: TodolistDomainType;
  tasks: Array<TaskType>;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    id: string,
    status: TaskStatuses,
    todolistId: string
  ) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todolistId: string
  ) => void;
  removeTask: (taskId: string, todolistId: string) => void;
  removeTodolist: (id: string) => void;
  changeTodolistTitle: (id: string, newTitle: string) => void;
};

export const Todolist: FC<TodolistProps> = memo(
  ({
    todolist,
    tasks,
    changeFilter,
    addTask,
    changeTaskStatus,
    changeTaskTitle,
    removeTask,
    removeTodolist,
    changeTodolistTitle,
  }) => {
    const dispatch = useDispatch();

    const addNewTask = (title: string) => {
      addTask(title, todolist.id);
    };

    const handleTodolistTitle = (title: string) => {
      changeTodolistTitle(todolist.id, title);
    };

    const onAllClickHandler = () => changeFilter("all", todolist.id);

    const onActiveClickHandler = () => changeFilter("active", todolist.id);

    const onCompletedClickHandler = () =>
      changeFilter("completed", todolist.id);

    let tasksForTodolist = tasks;

    if (todolist.filter === "active") {
      tasksForTodolist = tasks.filter(
        (task) => task.status === TaskStatuses.New
      );
    }

    if (todolist.filter === "completed") {
      tasksForTodolist = tasks.filter(
        (task) => task.status === TaskStatuses.Completed
      );
    }

    useEffect(() => {
      const thunk = fetchTasksTC(todolist.id);
      dispatch(thunk);
    }, []);

    return (
      <Wrapper>
        <h3>
          <EditableSpan value={todolist.title} onChange={handleTodolistTitle} />
          <IconButton
            onClick={() => removeTodolist(todolist.id)}
            disabled={todolist.entityStatus === "loading"}
          >
            <Delete />
          </IconButton>
        </h3>
        <AddItemForm
          addItem={addNewTask}
          disabled={todolist.entityStatus === "loading"}
        />
        <div>
          {tasksForTodolist.map((task) => (
            <Task
              key={task.id}
              task={task}
              todolistId={todolist.id}
              removeTask={removeTask}
              changeTaskTitle={changeTaskTitle}
              changeTaskStatus={changeTaskStatus}
            />
          ))}
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Button
            variant={todolist.filter === "all" ? "outlined" : "text"}
            onClick={onAllClickHandler}
            color={"default"}
          >
            All
          </Button>
          <Button
            variant={todolist.filter === "active" ? "outlined" : "text"}
            onClick={onActiveClickHandler}
            color={"primary"}
          >
            Active
          </Button>
          <Button
            variant={todolist.filter === "completed" ? "outlined" : "text"}
            onClick={onCompletedClickHandler}
            color={"secondary"}
          >
            Completed
          </Button>
        </div>
      </Wrapper>
    );
  }
);
