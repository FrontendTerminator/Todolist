import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
import {Meta, Story} from "@storybook/react";
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";


export default {
    title: 'TodoList/AddItemForm',
    component: AddItemForm
} as Meta

type AddItemFormType = {
    addItem: (title: string) => void
}

const Template: Story<AddItemFormType> = (props) => {
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
}

export const AddItemFormExample = Template.bind({})
AddItemFormExample.args = {
    addItem: action('Button inside clicked')
}

