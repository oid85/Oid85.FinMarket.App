import React from 'react'
import '../Icon.css'
import attention from "./img/attention.png";

export const Attention = ({visible}) => {
    const height = 10
    const width = 10

    if (visible) {
        return <img src={attention} alt="" height={height} width={width}/>
    }
    return <div>&nbsp;</div>
}