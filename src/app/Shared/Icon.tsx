import React from 'react'
import {getIcon, IconImage} from './icons'

type IconProps = {
    icon: IconImage,
}

export default function Icon(props: IconProps) {
    return (
        <div>
            <img src={getIcon(props.icon)} alt={`icon ${props.icon.name}`}/>
        </div>
    )
}
