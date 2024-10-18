import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux';
import {setTickerList} from '../../redux/actions/filterActions';
import { CONSTANTS } from '../../constants';

export const FilterByPortfolio = () => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        width: 100,
                        margin: 5
                    }}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setTickerList(CONSTANTS.TICKER_LIST_PORTFOLIO))
                    }}
                >Портфель</button>
            </div>
        </React.Fragment>
    )
}