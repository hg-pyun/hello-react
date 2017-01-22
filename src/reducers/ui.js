import * as types from '../actions/ActionTypes'

const initialState = {
    color : [255, 255, 255]
};

// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
export default function ui(state = initialState, action){
    if(action.type === types.SET_COLOR){
        return {
            color: action.color
        };
    }
    else {
        return state;
    }
    
}