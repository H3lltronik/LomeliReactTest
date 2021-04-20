import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logo_1.png'
import { routes } from '../Shared/routes'
import Input from './Input'

const Home = function Home() {
    return (
        <div className="row h-100 align-items-center">
            <div className="col-12">
                <div className="text-center"><img className="home_logo" src={logo} alt="logo"/></div>

                <div className="row justify-content-center px-4 px-lg-0">
                    <form className={"base_body"} action="">
                        <div className="row">
                            <div className="col-12">
                                <div className="row justify-content-center mt-5 mt-lg-5">
                                    <Input placeholder="Usuario" type={"text"} leftIcon={{name: 'user'}}></Input>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row justify-content-center mt-4">
                                    <Input placeholder="Contraseña" type={"password"} leftIcon={{name: 'password'}}></Input>
                                </div>
                            </div>
                            <div className="col-12 mt-4 mt-lg-4">
                                <div className="row align-items-center">
                                    <input className="mr-2" type="checkbox" id="remember_me" value="remember_me"/>
                                    <label htmlFor="remember_me" className="text-color_form mb-0">Recordar datos de acceso</label>
                                </div>
                            </div>
                            <div className="col-12 mt-5 mt-lg-5">
                                <div className="row">
                                    <Link to={routes.categories} className="button background-color_main">
                                        <span className="text-color_white">Ingresar</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
