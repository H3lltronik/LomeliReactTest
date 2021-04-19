import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logo_1.png'
import { routes } from '../Shared/routes'
import InputWPrepIcon from './InputWPrepIcon'

const Home = function Home() {
    return (
        <div>
            <div className="text-center"><img className="home_logo" src={logo} alt="logo"/></div>

            <div className="row justify-content-center px-4 px-lg-0">
                <form className={"home_form"} action="">
                    <div className="row">
                        <div className="col-12">
                            <div className="row justify-content-center mt-5 mt-lg-5">
                                <InputWPrepIcon placeholder="Usuario" type={"text"} icon={{name: 'user'}}></InputWPrepIcon>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-center mt-4">
                                <InputWPrepIcon placeholder="Contraseña" type={"password"} icon={{name: 'password'}}></InputWPrepIcon>
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
    )
}

export default Home
