import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaPairArbitrageSpreads } from '../../../redux/actions/pairArbitrageActions'
import '../../Diagram/Diagram.css'
import { SpreadDiagramContainer } from '../../Diagram/SpreadDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDays/FilterByLastDaysGroup'
import {setStartDate} from "../../../redux/actions/filterActions"
import moment from "moment/moment"

export const PairArbitrageDiagramSpreads = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.pairArbitrage.spreadDiagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)

    useEffect(() => {
        dispatch(sagaPairArbitrageSpreads())
        dispatch(setStartDate(moment()
            .subtract(45, 'days')
            .format('YYYY-MM-DD')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaPairArbitrageSpreads())
    }, [startDate, endDate])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastDaysGroup />
                        <SpreadDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}