import { FETCH_REPORT } from '../types'

const initialState = {
    reportData: {}
}

export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPORT:         
            return {...state, reportData: {...action.payload}}
        
        default: return state
    }
}