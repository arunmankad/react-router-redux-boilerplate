import {produce} from 'immer';
import * as actionTypes from './actions';

const initailState = {
    loadingData: true,
    data: {}
}

const reducer = (state=initailState, action)=>{
    console.log('REDUCER - ',action)
    return produce(state, draft =>{
        switch(action.type){
            case actionTypes.LOADING_DATA:
                console.log('REDUCER LOADING DATA')
                draft.loadingData = true;
                break;
            case actionTypes.GET_DATA_ASYNC:
                console.log('PAYLOAD', action.payload)
                draft.data = action.payload.data;
                draft.loadingData = false;
                break;
            default:
                return draft;
        }
    });
}

export default reducer;