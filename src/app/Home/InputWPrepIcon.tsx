import React from 'react'
import Icon from '../Shared/Icon'
import { IconImage } from '../Shared/icons'

type InputWPrepIconProps = {
    icon?: IconImage,
    type?: string,
    placeholder?: string,
}

export default function InputWPrepIcon(props: InputWPrepIconProps) {
    return (
        <div className={"input-w-prepend-icon"}>
            {
                props.icon?
                <div className={"input-w-prepend-icon_icon"}>
                    <Icon icon={props.icon}></Icon>
                </div>
                :null
            }
            <input className={"input-w-prepend-icon_input"} 
            type={props.type? props.type:'text'} 
            placeholder={props.placeholder}/>
        </div>
    )
}
