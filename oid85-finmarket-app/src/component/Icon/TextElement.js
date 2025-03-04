import React from 'react'
import './Icon.css'
import {CONSTANTS} from "../../constants";

export const TextElement = ({value, color}) => {

    return (
        <React.Fragment>
            <div style={{ backgroundColor: color}}>
                {value}
            </div>
        </React.Fragment>
    )
}