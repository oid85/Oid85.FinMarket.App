import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramCurrenciesDailyClosePrices } from '../../../redux/actions/diagramCurrenciesActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterByCurrenciesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByCurrenciesTickerListGroup"
import {sagaReportCurrenciesYieldLtm} from "../../../redux/actions/reportCurrenciesActions"

export const DiagramCurrenciesDailyClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramCurrencies.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.currenciesTickerList)

    useEffect(() => {
        dispatch(sagaDiagramCurrenciesDailyClosePrices())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_DIAGRAMS - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramCurrenciesDailyClosePrices())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaDiagramCurrenciesDailyClosePrices())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaDiagramCurrenciesDailyClosePrices())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <FilterByCurrenciesTickerListGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}