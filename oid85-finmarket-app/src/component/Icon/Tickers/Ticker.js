import React from 'react'
import '../Icon.css'
import {TextElement} from "../TextElement";

import abrd from "./img/abrd.png";
import afks from "./img/afks.png";
import aflt from "./img/aflt.png";
import aptk from "./img/aptk.png";
import aqua from "./img/aqua.png";
import belu from "./img/belu.png";
import gazp from "./img/gazp.png";
import gche from "./img/gche.png";
import gmkn from "./img/gmkn.png";
import hnfg from "./img/hnfg.png";
import klvz from "./img/klvz.png";
import lkoh from "./img/lkoh.png";
import lent from "./img/lent.png";
import krot from "./img/krot.png";
import mgnt from "./img/mgnt.png";
import moex from "./img/moex.png";
import mtlr from "./img/mtlr.png";
import nlmk from "./img/nlmk.png";
import nvtk from "./img/nvtk.png";
import ozon from "./img/ozon.png";
import plzl from "./img/plzl.png";
import posi from "./img/posi.png";
import rosn from "./img/rosn.png";
import sber from "./img/sber.png";
import selg from "./img/selg.png";
import sgzh from "./img/sgzh.png";
import smlt from "./img/smlt.png";
import spbe from "./img/spbe.png";
import t from "./img/t.png";
import tatn from "./img/tatn.png";
import vkco from "./img/vkco.png";
import vtbr from "./img/vtbr.png";
import x5 from "./img/x5.png";

export const Ticker = ({value, color}) => {

    const height = 36
    const width = 36

    switch(value){
        case 'ABRD': return (<img src={abrd} alt="" height={height} width={width}/>)
        case 'AFKS': return (<img src={afks} alt="" height={height} width={width}/>)
        case 'AFLT': return (<img src={aflt} alt="" height={height} width={width}/>)
        case 'APTK': return (<img src={aptk} alt="" height={height} width={width}/>)
        case 'AQUA': return (<img src={aqua} alt="" height={height} width={width}/>)
        case 'BELU': return (<img src={belu} alt="" height={height} width={width}/>)
        case 'GAZP': return (<img src={gazp} alt="" height={height} width={width}/>)
        case 'GCHE': return (<img src={gche} alt="" height={height} width={width}/>)
        case 'GMKN': return (<img src={gmkn} alt="" height={height} width={width}/>)
        case 'HNFG': return (<img src={hnfg} alt="" height={height} width={width}/>)
        case 'KLVZ': return (<img src={klvz} alt="" height={height} width={width}/>)
        case 'KROT': return (<img src={krot} alt="" height={height} width={width}/>)
        case 'LENT': return (<img src={lent} alt="" height={height} width={width}/>)
        case 'LKOH': return (<img src={lkoh} alt="" height={height} width={width}/>)
        case 'MGNT': return (<img src={mgnt} alt="" height={height} width={width}/>)
        case 'MOEX': return (<img src={moex} alt="" height={height} width={width}/>)
        case 'MTLR': return (<img src={mtlr} alt="" height={height} width={width}/>)
        case 'NLMK': return (<img src={nlmk} alt="" height={height} width={width}/>)
        case 'NVTK': return (<img src={nvtk} alt="" height={height} width={width}/>)
        case 'OZON': return (<img src={ozon} alt="" height={height} width={width}/>)
        case 'PLZL': return (<img src={plzl} alt="" height={height} width={width}/>)
        case 'POSI': return (<img src={posi} alt="" height={height} width={width}/>)
        case 'ROSN': return (<img src={rosn} alt="" height={height} width={width}/>)
        case 'SBER':
        case 'SBERP': return (<img src={sber} alt="" height={height} width={width}/>)
        case 'SELG': return (<img src={selg} alt="" height={height} width={width}/>)
        case 'SGZH': return (<img src={sgzh} alt="" height={height} width={width}/>)
        case 'SMLT': return (<img src={smlt} alt="" height={height} width={width}/>)
        case 'SPBE': return (<img src={spbe} alt="" height={height} width={width}/>)
        case 'T': return (<img src={t} alt="" height={height} width={width}/>)
        case 'TATNP':
        case 'TATN': return (<img src={tatn} alt="" height={height} width={width}/>)
        case 'VKCO': return (<img src={vkco} alt="" height={height} width={width}/>)
        case 'VTBR': return (<img src={vtbr} alt="" height={height} width={width}/>)
        case 'X5': return (<img src={x5} alt="" height={height} width={width}/>)

        default:
            return (<TextElement value={value} color={color}/>)
    }
}
