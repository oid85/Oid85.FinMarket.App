import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesClosePrices } from '../../../redux/actions/diagramSharesActions'
import '../../Report/Report.css'
import { SimpleDiagramContainer } from '../../Diagram/SimpleDiagramContainer'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDaysGroup'

export const DiagramSharesClosePrices = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)

    useEffect(() => {
        dispatch(sagaDiagramSharesClosePrices())
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramSharesClosePrices())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaDiagramSharesClosePrices())
    }, [endDate])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <SimpleDiagramContainer containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}