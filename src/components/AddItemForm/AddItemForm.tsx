import React, { ChangeEvent, FC, KeyboardEvent, useState, memo } from "react";
import { IconButton } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import { StyledTextField, Wrapper } from "./styles";

type AddItemFormProps = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm: FC<AddItemFormProps> = memo(
  ({ addItem, disabled = false }) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

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
          label="Title"
          variant="outlined"
          disabled={disabled}
          error={!!error}
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          helperText={error}
        />
        <IconButton
          color="primary"
          style={{ marginTop: "4px" }}
          disabled={disabled}
          onClick={addItemHandler}
        >
          <AddBox />
        </IconButton>
      </Wrapper>
    );
  }
);
