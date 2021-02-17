import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormType) => {
    console.log("AddItemForm")
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const addItem = () => {
        const itemTitle = title.trim()
        if(itemTitle){
            props.addItem(itemTitle)
        } else {
            setError("Title is required!")
        }
        setTitle("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if ( error !== null) setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") addItem()
    }

    return (
        <div>
            <TextField
                variant={"outlined"}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPress}
                error={!!error}
                label={"Title"}
                helperText={error}
            />
            <IconButton color={"primary"} onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    )
})

