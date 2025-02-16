import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTodolistFilterAC,
  FilterValuesType,
} from "../../store/todolist-reducer/todolists-reducer";
import { AddItemForm } from "../../components/AddItemForm/AddItemForm";
import { Todolist } from "./Todolist/Todolist";
import { Redirect } from "react-router-dom";
import { TaskStatuses } from "../../api/types";
import { selectIsLoggedIn } from "../../store/auth-reducer/selectors";
import { selectTasks } from "../../store/tasks-reducer/selectors";
import { selectTodolists } from "../../store/todolist-reducer/selectors";
import { Container } from "./styles";
import {
  addTaskTC,
  removeTaskTC,
  updateTaskTC,
} from "../../store/tasks-reducer/thunks";
import {
  addTodolistTC,
  changeTodolistTitleTC,
  fetchTodolistsTC,
  removeTodolistTC,
} from "../../store/todolist-reducer/thunks";

export const TodolistsList: React.FC = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const todolists = useSelector(selectTodolists);
  const tasks = useSelector(selectTasks);

  const removeTask = (id: string, todolistId: string) => {
    const thunk = removeTaskTC(id, todolistId);
    dispatch(thunk);
  };

  const addTask = (title: string, todolistId: string) => {
    const thunk = addTaskTC(title, todolistId);
    dispatch(thunk);
  };

  const changeStatus = (
    id: string,
    status: TaskStatuses,
    todolistId: string
  ) => {
    const thunk = updateTaskTC(id, { status }, todolistId);
    dispatch(thunk);
  };

  const changeTaskTitle = (
    id: string,
    newTitle: string,
    todolistId: string
  ) => {
    const thunk = updateTaskTC(id, { title: newTitle }, todolistId);
    dispatch(thunk);
  };

  const changeFilter = (value: FilterValuesType, todolistId: string) => {
    const action = changeTodolistFilterAC({ id: todolistId, filter: value });
    dispatch(action);
  };

  const removeTodolist = (id: string) => {
    const thunk = removeTodolistTC(id);
    dispatch(thunk);
  };

  const changeTodolistTitle = (id: string, title: string) => {
    const thunk = changeTodolistTitleTC(id, title);
    dispatch(thunk);
  };

  const addTodolist = (title: string) => {
    const thunk = addTodolistTC(title);
    dispatch(thunk);
  };

  useEffect(() => {
    const thunk = fetchTodolistsTC();
    dispatch(thunk);
  }, []);

  if (!isLoggedIn) {
    return <Redirect to={"/login"} />;
  }

  return (
    <>
      <AddItemForm addItem={addTodolist} />
      <Container>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id];

          return (
            <Todolist
              key={tl.id}
              todolist={tl}
              tasks={allTodolistTasks}
              removeTask={removeTask}
              changeFilter={changeFilter}
              addTask={addTask}
              changeTaskStatus={changeStatus}
              removeTodolist={removeTodolist}
              changeTaskTitle={changeTaskTitle}
              changeTodolistTitle={changeTodolistTitle}
            />
          );
        })}
      </Container>
    </>
  );
};
