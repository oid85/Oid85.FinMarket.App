import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesDailyClosePrices } from '../../../redux/actions/diagramSharesActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"
import {CONSTANTS} from "../../../constants"
import {FilterBySharesTickerListGroup} from "../../Filter/FilterByTickerList/FilterBySharesTickerListGroup"
import {sagaReportSharesYieldLtm} from "../../../redux/actions/reportSharesActions"

export const DiagramSharesDailyClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const tickerList = useSelector(state => state.filter.sharesTickerList)

    useEffect(() => {
        dispatch(sagaDiagramSharesDailyClosePrices())
        dispatch(setStartDate(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_DIAGRAMS - 1, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramSharesDailyClosePrices())
    }, [startDate, endDate, tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <FilterBySharesTickerListGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}