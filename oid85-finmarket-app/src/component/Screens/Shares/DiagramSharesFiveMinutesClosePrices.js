import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesFiveMinutesClosePrices } from '../../../redux/actions/diagramSharesActions'
import '../../Diagram/Diagram.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastHoursGroup} from '../../Filter/FilterByLastHoursGroup'
import {setStartDateTime} from "../../../redux/actions/filterActions";
import moment from "moment/moment";
import {CONSTANTS} from "../../../constants";

export const DiagramSharesFiveMinutesClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)
    const startDateTime = useSelector(state => state.filter.startDateTime)
    const endDateTime = useSelector(state => state.filter.endDateTime)

    useEffect(() => {
        dispatch(sagaDiagramSharesFiveMinutesClosePrices())
        dispatch(setStartDateTime(moment()
            .subtract(CONSTANTS.DEFAULT_PERIOD_HOURS_FOR_DIAGRAMS, 'hours')
            .format('YYYY-MM-DD HH:mm:ss')
            .toString()))
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramSharesFiveMinutesClosePrices())
    }, [startDateTime])

    useEffect(() => {
        dispatch(sagaDiagramSharesFiveMinutesClosePrices())
    }, [endDateTime])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterByLastHoursGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}