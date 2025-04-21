import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramBondsDailyClosePrices } from '../../../redux/actions/diagramBondsActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterByBondsTickerListGroup} from "../../Filter/FilterByTickerList/FilterByBondsTickerListGroup"
import {sagaReportBondsYieldLtm} from "../../../redux/actions/reportBondsActions"

export const DiagramBondsDailyClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramBonds.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.bondsTickerList)

    useEffect(() => {
        dispatch(sagaDiagramBondsDailyClosePrices())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_DIAGRAMS - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramBondsDailyClosePrices())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaDiagramBondsDailyClosePrices())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaDiagramBondsDailyClosePrices())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <FilterByBondsTickerListGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}