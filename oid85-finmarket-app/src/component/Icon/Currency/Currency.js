import React from 'react'
import '../Icon.css'
import {TextElement} from "../TextElement";

export const Currency = ({value, color}) => {
    switch (value) {
        case 'rub': return <div style={{backgroundColor: color}}>&#8381;</div>
        case 'usd': return <div style={{backgroundColor: color}}>&#x24;</div>
        case 'eur': return <div style={{backgroundColor: color}}>&#8364;</div>
        case 'cny': return <div style={{backgroundColor: color}}>&#165;</div>
        default: return (<TextElement value={value} color={color}/>)
    }
}