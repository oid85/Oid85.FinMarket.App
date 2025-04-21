import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setBondsTickerList} from '../../../redux/actions/filterActions'

export const FilterByBondsTickerList = ({key, tickerListName, tickerList}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        width: 80,
                        margin: 1,
                        fontSize: 10
                    }}
                    key={key}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setBondsTickerList(tickerList))
                    }}
                >{tickerListName}</button>
            </div>
        </React.Fragment>
    )
}
