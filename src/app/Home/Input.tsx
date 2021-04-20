import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Shared/Icon'
import { IconImage } from '../Shared/icons'

type InputProps = {
    leftIcon?: IconImage,
    leftIconClass?: string,
    rightIcon?: IconImage,
    rightIconClass?: string,
    type?: string,
    placeholder?: string,
    rightIconAction?: any,
    inputClass?: string
}

export default function Input(props: InputProps) {
    return (
        <div className={`input-w-prepend-icon ${props.leftIconClass}`}>
            {
                props.leftIcon?
                <div className={"input-w-prepend-icon_icon"}>
                    <Icon icon={props.leftIcon}></Icon>
                </div>
                :null
            }
            <input className={`input-w-prepend-icon_input ${props.inputClass}`} 
            type={props.type? props.type:'text'} 
            placeholder={props.placeholder}/>
            {
                props.rightIcon?
                <div className={`input-w-prepend-icon_icon input-w-prepend-icon_icon--right ${props.rightIconClass}`} 
                onClick={ props.rightIconAction? props.rightIconAction:null }
                >
                    <Icon icon={props.rightIcon}></Icon>
                </div>
                :null
            }
        </div>
    )
}
