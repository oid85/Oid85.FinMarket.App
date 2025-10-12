import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda } from '../../../redux/actions/diagramSharesActions'
import '../../Diagram/Diagram.css'
import { MultiplicatorDiagram } from '../../Diagram/MultiplicatorDiagram'
import {FilterBySharesTickerListGroup} from "../../Filter/FilterByTickerList/FilterBySharesTickerListGroup"

export const DiagramSharesMultiplicatorsMcapPeNetDebtEbitda = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)
    const tickerList = useSelector(state => state.filter.sharesTickerList)

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
                        <MultiplicatorDiagram containerData = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}