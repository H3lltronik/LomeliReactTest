import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Shared/Icon'
import { routes } from '../Shared/routes'

export default function Done() {
    return (
        <div className="col-12 done_body">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="base_body w-100">
                            <div className="row justify-content-center text-center">
                                <div className="mt-4 mt-lg-5"><Icon icon={{name: 'check'}}></Icon></div>

                                <div className="col-12 mt-4">
                                    <div className="form_label">Pago realizado con éxito</div>
                                </div>

                                <div className="col-12">
                                    <div className="row mt-4 mt-lg-5">
                                        <Link to={routes.categories} className="button background-color_secondary mx-3">
                                            <span className="text-color_white">Ok</span>
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
