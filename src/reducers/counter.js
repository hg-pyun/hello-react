import * as types from '../actions/ActionTypes'

const initialState = {
    number : 0
};


// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
// 객체의 값이 2개 이상일 경우에는 ex6 spread 문법을 사용한다.
export default function counter(state = initialState, action){
    switch (action.type){
        case types.INCREMENT:
            return { number : state.number + 1 };
        case types.DECREMENT:
            return { number : state.number - 1 };
        default:
            return state;
    }
}