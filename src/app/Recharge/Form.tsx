import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Home/Input'
import { routes } from '../Shared/routes'
import Header from './Header'
import {creditCardType} from '../Shared/utils'

const initialFormVal = {
    name: "",
    number: "",
    expiration_date: "",
}

export default function Form() {
    const [form, setForm] = useState({})

    useEffect(() => {
        
    }, [])

    return (
        <div className="col-12 base_body">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-10 col-md-12">
                    <Header title="Ya casi, completa los datos de tu tarjeta para pagar" backButtonRoute={routes.rechargeSecond}></Header>

                    <div className="row justify-content-center">
                        <div className="base_body w-100">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <div className="form_label">Nombre del titular</div>
                                    <Input inputClass="pl-3 pl-lg-4"></Input> 
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="form_label">Número de tarjeta</div>
                                    <Input inputClass="pl-3 pl-lg-4" rightIcon={{name: 'mastercard'}} rightIconClass="form_icon"></Input> 
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <div className="form_label">Fecha de expiración</div>
                                    <Input inputClass="pl-3 pl-lg-4"></Input> 
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <div className="form_label">Año</div>
                                    <Input inputClass="pl-3 pl-lg-4"></Input> 
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <div className="form_label">Código de seguridad </div>
                                    <Input inputClass="pl-3 pl-lg-4" placeholder="3 dígitos" type="number"></Input> 
                                </div>
                                <div className="col-12">
                                    <div className="row mt-4 mt-lg-5">
                                        <Link to={routes.rechargeLast} className="button background-color_main mx-3">
                                            <span className="text-color_white">Siguiente</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
