import React from 'react'
import '../Icon.css'
import {TextElement} from "../TextElement";

export const Currency = ({value, color}) => {
    switch (value) {
        case 'rub': return <div style={{textAlign: 'center', backgroundColor: color, fontSize: 18}}>&#8381;</div>
        case 'usd': return <div style={{textAlign: 'center', backgroundColor: color, fontSize: 18}}>&#x24;</div>
        case 'eur': return <div style={{textAlign: 'center', backgroundColor: color, fontSize: 18}}>&#8364;</div>
        case 'cny': return <div style={{textAlign: 'center', backgroundColor: color, fontSize: 18}}>&#165;</div>
        default: return (<TextElement value={value} color={color}/>)
    }
}