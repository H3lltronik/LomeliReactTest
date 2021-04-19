import React from 'react'
import logo from '../../assets/images/icons/logo_1.png'
import InputWPrepIcon from './InputWPrepIcon'

const Home = function Home() {
    return (
        <div className={"col-12"}>
            <div className="row home justify-content-center d-flex align-items-center justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="text-center"><img className="home_logo" src={logo} alt="logo"/></div>

                    <div className="row justify-content-center">
                        <form className={"home_form"} action="">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row justify-content-center mt-4 mt-lg-5">
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
                                <div className="col-12 mt-4 mt-lg-5">
                                    <div className="row">
                                        <button type="button" className="button background-color_main">
                                            <span className="text-color_white">Ingresar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
