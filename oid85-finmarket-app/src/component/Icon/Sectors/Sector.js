import React from 'react'
import '../Icon.css'
import {TextElement} from "../TextElement";
import {Financical} from "./Financical";
import {Energy} from "./Energy";
import {HealthCare} from "./HealthCare";
import {Consumer} from "./Consumer";
import {Industrial} from "./Industrial";
import {It} from "./It";
import {Materials} from "./Materials";
import {RealEstate} from "./RealEstate";
import {Utilites} from "./Utilites";
import {Telecom} from "./Telecom";
import {Other} from "./Other";
import {Government} from "./Government";
import {Municipal} from "./Municipal";

export const Sector = ({value, color}) => {

    switch(value){
        case 'energy':
            return (<Energy />)

        case 'financial':
            return (<Financical />)

        case 'health_care':
            return (<HealthCare />)

        case 'consumer':
            return (<Consumer />)

        case 'industrials':
            return (<Industrial ч/>)

        case 'it':
            return (<It />)

        case 'materials':
            return (<Materials />)

        case 'real_estate':
            return (<RealEstate />)

        case 'utilities':
            return (<Utilites />)

        case 'telecom':
            return (<Telecom />)

        case 'other':
            return (<Other />)

        case 'government':
            return (<Government />)

        case 'municipal':
            return (<Municipal />)

        default:
            return (<TextElement value={value} color={color}/>)
    }
}