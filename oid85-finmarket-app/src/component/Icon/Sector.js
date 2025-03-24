import React from 'react'
import '../Icon.css'
import {TextElement} from "./TextElement";
import energy from './img/gasoil.png'
import financial from './img/finance.png'
import health_care from './img/healthcare.png'
import consumer from './img/retail.png'
import industrials from './img/industrial.png'
import it from './img/it.png'
import materials from './img/mining.png'
import real_estate from './img/development.png'
import utilities from './img/energogeneration.png'
import telecom from './img/telecom.png'
import other from './img/other.png'
import government from './img/ofz.png'
import municipal from './img/municipal.png'

export const Sector = ({value, color}) => {

    const height = 44
    const width = 44

    switch(value){
        case 'energy':return <img src={energy} alt="" height={height} width={width}/>
        case 'financial':return <img src={financial} alt="" height={height} width={width}/>
        case 'health_care':return <img src={health_care} alt="" height={height} width={width}/>
        case 'consumer':return <img src={consumer} alt="" height={height} width={width}/>
        case 'industrials':return <img src={industrials} alt="" height={height} width={width}/>
        case 'it':return <img src={it} alt="" height={height} width={width}/>
        case 'materials':return <img src={materials} alt="" height={height} width={width}/>
        case 'real_estate':return <img src={real_estate} alt="" height={height} width={width}/>
        case 'utilities':return <img src={utilities} alt="" height={height} width={width}/>
        case 'telecom':return <img src={telecom} alt="" height={height} width={width}/>
        case 'other':return <img src={other} alt="" height={height} width={width}/>
        case 'government':return <img src={government} alt="" height={height} width={width}/>
        case 'municipal':return <img src={municipal} alt="" height={height} width={width}/>

        default:
            return <TextElement value={value} color={color}/>
    }
}