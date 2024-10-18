import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from 'react-redux';
import {setEndDate, setStartDate} from '../../redux/actions/filterActions';

export const FilterByLastDay30 = () => {

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
                        dispatch(setStartDate(moment()
                            .subtract(29, 'days')
                            .format('YYYY-MM-DD')
                            .toString()))
                        dispatch(setEndDate(moment()
                            .format('YYYY-MM-DD')
                            .toString()))
                    }}
                >30 дней</button>
            </div>
        </React.Fragment>
    )
}