import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setBondsTickerList} from '../../../redux/actions/filterActions'

export const FilterByBondsTickerList = ({key, tickerList}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                style={{
                    width: 75,
                    margin: 1
                }}
                    key={key}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setBondsTickerList(tickerList))
                    }}
                >{tickerList}</button>
            </div>
        </React.Fragment>
    )
}
