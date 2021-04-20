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
            <div className="col-12 col-md-auto order-2 order-md-1 mt-4 mt-md-0">
                <div className="d-flex align-items-center justify-content-center mr-2 h-100">
                    <Link to={props.backButtonRoute}><Icon icon={{name:"back"}}></Icon></Link>
                    <Link to={routes.categories} className="ml-2"><Icon icon={{name:"home"}}></Icon></Link>
                </div>
            </div>
            <div className="col-12 col-md-auto order-1 order-md-2 mt-3 mt-md-0">
                <div className="text-center">
                    <div className=""><img className="categories_logo" src={logo} alt="logo"/></div>
                    <div className="mt-1 text-color_dark">{props.title}</div>
                </div>
            </div>
            <div className="col-md-2 order-3"></div>
        </div>
    )
}
