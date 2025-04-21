import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramIndexesDailyClosePrices } from '../../../redux/actions/diagramIndexesActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterByIndexesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByIndexesTickerListGroup"
import {sagaReportIndexesYieldLtm} from "../../../redux/actions/reportIndexesActions"

export const DiagramIndexesDailyClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramIndexes.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.indexesTickerList)

    useEffect(() => {
        dispatch(sagaDiagramIndexesDailyClosePrices())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_DIAGRAMS - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramIndexesDailyClosePrices())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaDiagramIndexesDailyClosePrices())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaDiagramIndexesDailyClosePrices())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <FilterByIndexesTickerListGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}