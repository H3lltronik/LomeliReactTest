import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Shared/routes'
import companies from './companies'
import Header from './Header'

export default function Company() {
    return (
        <div className="base_body w-100">
            <Header title="Selecciona tu compañia" backButtonRoute={routes.categories}></Header>

            <div className="row justify-content-center">
                <div className="base_body mt-5">
                    <div className="row">
                        {
                            companies.map((item, index) => {
                                return <div className="col-12 col-md-6 col-lg-4" key={index}>
                                    <Link to={routes.rechargeSecond}>
                                        <img src={item.image} alt="company item"/>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
