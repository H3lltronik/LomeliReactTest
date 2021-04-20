import React from 'react'
import Icon from './Icon'

export default function Footer() {
    return (
        <div className="row footer align-items-center background-color_dark">
            <div className="container">
                <div className="row px-4 px-md-0 justify-content-center justify-content-md-between align-items-center">
                    <span className="text-white">Butterfly all rights reserved ©2021</span>

                    <div className="d-flex ml-2">
                        <div><Icon icon={{name: 'facebook'}}></Icon></div>
                        <div className="mx-2"><Icon icon={{name: 'youtube'}}></Icon></div>
                        <div><Icon icon={{name: 'medium'}}></Icon></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
