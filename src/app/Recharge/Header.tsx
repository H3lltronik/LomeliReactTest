import React from 'react'
import Icon from '../Shared/Icon'
import logo from '../../assets/images/icons/logo_2.png'
import { Link } from 'react-router-dom'
import { routes } from '../Shared/routes'

type HeaderProps = {
    title: string,
    backButtonRoute: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className="row justify-content-between">
            <div className="d-flex align-items-center mr-2">
                <Link to={props.backButtonRoute}><Icon icon={{name:"back"}}></Icon></Link>
                <Link to={routes.home} className="ml-2"><Icon icon={{name:"home"}}></Icon></Link>
            </div>
            <div className="text-center">
                <div className=""><img className="categories_logo" src={logo} alt="logo"/></div>
                <div className="mt-1 text-color_dark">{props.title}</div>
            </div>
            <div></div>
        </div>
    )
}
