import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda } from '../../../redux/actions/diagramSharesActions'
import '../../Diagram/Diagram.css'
import {BubbleDiagram} from "../../Diagram/BubbleDiagram";

export const DiagramSharesMultiplicatorsMcapPeNetDebtEbitda = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const diagramData = useSelector(state => state.diagramShares.diagramData)

    useEffect(() => {
        dispatch(sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda())
    }, [])

    return (
        <React.Fragment>
            {
                !diagramData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='diagram-container'>
                        <BubbleDiagram data = {diagramData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}