import React from 'react'
import Checkbox from '@mui/joy/Checkbox';
type MuiCheckboxProp = {
    checked: boolean | undefined,
    label: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    indeterminate?: boolean | undefined
}
const MuiCheckbox = ({ checked, label, onChange, indeterminate }: MuiCheckboxProp) => {
    return (
        <Checkbox
            checked={checked}
            label={label}
            sx={checkboxStyles}
            onChange={onChange}
            indeterminate={indeterminate} />
    )
}
const checkboxStyles = {
    "& .css-n82b39-JoyCheckbox-checkbox ": {
        backgroundColor: "#B6CD0F",
    },
    marginRight: '3rem',
    paddingTop: '2rem',

};
export default MuiCheckbox