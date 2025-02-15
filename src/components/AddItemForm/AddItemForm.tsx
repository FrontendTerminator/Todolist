import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { IconButton } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import { StyledTextField, Wrapper } from "./styles";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm = React.memo(function ({
  addItem,
  disabled = false,
}: AddItemFormPropsType) {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const addItemHandler = () => {
    if (title.trim() !== "") {
      addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.charCode === 13) {
      addItemHandler();
    }
  };

  return (
    <Wrapper>
      <StyledTextField
        variant="outlined"
        disabled={disabled}
        error={!!error}
        value={title}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        label="Title"
        helperText={error}
      />
      <IconButton
        style={{ marginTop: "4px" }}
        color="primary"
        onClick={addItemHandler}
        disabled={disabled}
      >
        <AddBox />
      </IconButton>
    </Wrapper>
  );
});
