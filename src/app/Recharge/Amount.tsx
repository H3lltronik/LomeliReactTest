import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../Home/Input';
import { routes } from '../Shared/routes';
import Header from './Header';

export default function Amount() {
    const amounts = [20, 30, 50, 100, 200, 300, 500];

    function formatToMoney (value: number) {
        return `$${value.toFixed(2)}`
    }
    
    return (
        <div className="col-12 base_body">
            <div className="row h-100 align-items-center">
                <div className="col-10 col-md-12 mx-auto">
                    <Header title="Selecciona tu paquete" backButtonRoute={routes.rechargeFirst}></Header>

                    <div className="row justify-content-center">
                        <div className="base_body mt-5">
                            <div className="row">
                                {
                                    amounts.map((item) => {
                                        return <div className="col-12 col-md-6 col-lg-4 amount_item text-color_dark">
                                            <Link to={routes.rechargeThird}>
                                                <div className="amount_item_inner text-center mx-3 mx-lg-4">{formatToMoney(item)}</div>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3 mt-lg-3">
                                    <Input placeholder="Ingrese su número telefónico de 10 dígitos" inputClass="px-2"></Input>
                                </div>
                                <div className="col-12">
                                    <div className="row mt-4 mt-lg-5">
                                        <Link to={routes.rechargeThird} className="button background-color_main mx-3">
                                            <span className="text-color_white">Ingresar</span>
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
