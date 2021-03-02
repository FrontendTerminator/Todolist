import React from "react";
import {Meta, Story} from "@storybook/react";
import EditableSpan from "./EditableSpan";
import {action} from "@storybook/addon-actions";

type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export default {
    title: 'TodoList/EditableSpan',
    component: EditableSpan,
    argTypes: {
        changeTitle: {
            description: 'Value EditableSpan changed'
        },
        title: {
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    }
} as Meta

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args}/>

export const EditableSpanExample = Template.bind({})
EditableSpanExample.args = {
    changeTitle: action("Value EditableSpan changed")
}