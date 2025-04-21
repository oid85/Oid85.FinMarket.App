import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramFuturesDailyClosePrices } from '../../../redux/actions/diagramFuturesActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterByFuturesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByFuturesTickerListGroup"
import {sagaReportFuturesYieldLtm} from "../../../redux/actions/reportFuturesActions"

export const DiagramFuturesDailyClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramFutures.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.futuresTickerList)

    useEffect(() => {
        dispatch(sagaDiagramFuturesDailyClosePrices())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_DIAGRAMS - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramFuturesDailyClosePrices())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaDiagramFuturesDailyClosePrices())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaDiagramFuturesDailyClosePrices())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <FilterByFuturesTickerListGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}