import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda } from '../../../redux/actions/diagramSharesActions'
import '../../Diagram/Diagram.css'
import {BubbleDiagram} from "../../Diagram/BubbleDiagram"
import {FilterBySharesTickerListGroup} from "../../Filter/FilterByTickerList/FilterBySharesTickerListGroup";

export const DiagramSharesMultiplicatorsMcapPeNetDebtEbitda = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)
    const tickerList = useSelector(state => state.filter.sharesTickerList)

    useEffect(() => {
        dispatch(sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda())
    }, [])

    useEffect(() => {
        dispatch(sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <FilterBySharesTickerListGroup />
                        <BubbleDiagram data = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}