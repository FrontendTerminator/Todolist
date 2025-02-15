import React, { FC, ChangeEvent, memo } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { EditableSpan } from "../../../../../components/EditableSpan/EditableSpan";
import { Delete } from "@material-ui/icons";

import { Wrapper } from "./styles";
import { TaskStatuses, TaskType } from "../../../../../api/types";

type TaskProps = {
  task: TaskType;
  todolistId: string;
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
};

export const Task: FC<TaskProps> = memo(
  ({ task, todolistId, changeTaskStatus, changeTaskTitle, removeTask }) => {
    const { id, status, title } = task;

    const onClickHandler = () => removeTask(id, todolistId);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked
        ? TaskStatuses.Completed
        : TaskStatuses.New;

      changeTaskStatus(id, newIsDoneValue, todolistId);
    };

    const onTitleChangeHandler = (newValue: string) => {
      changeTaskTitle(id, newValue, todolistId);
    };

    return (
      <Wrapper>
        <Checkbox
          checked={status === TaskStatuses.Completed}
          color="primary"
          onChange={onChangeHandler}
        />

        <EditableSpan value={title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
          <Delete />
        </IconButton>
      </Wrapper>
    );
  }
);
