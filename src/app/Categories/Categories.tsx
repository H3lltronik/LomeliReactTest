import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logo_2.png'
import {gridItemsByOrder, GridItem} from './products'

const Categories = function Categories() {
    return (
        <div>
            <div className="text-center">
                <div className=""><img className="categories_logo" src={logo} alt="logo"/></div>
                <div className="mt-1 text-color_dark">La mejor aplicación para pago de servicios</div>
            </div>

            <div className="row justify-content-center">
                <div className="base_body mt-5">
                    <div className="row">
                        {
                            gridItemsByOrder().map((item: GridItem, index) => {
                                return <div className="col-12 col-md-6 col-xl-4 product py-4 px-3" key={index}>
                                    <Link to={item.route}>
                                        <img className="img-fluid" src={item.image} alt={`product ${item.name}`}/>
                                        <div className="product_name text-color_white">{item.name}</div>
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

export default Categories
