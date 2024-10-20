import React from 'react'
import { CONSTANTS } from '../../constants'
import { Bull } from './Bull'
import { Bear } from './Bear'
import { Sber } from './Sber'
import './Icon.css'

export const Icon = ({value}) => {
    
    switch (value) {
        
        case CONSTANTS.TREND_UP:
            return (<Bull />)
        
        case CONSTANTS.TREND_DOWN:
            return (<Bear />)       

        default:
            return (
            <React.Fragment>
                {value}
            </React.Fragment>
        )
    }    
}