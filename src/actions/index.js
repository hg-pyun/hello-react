import * as types from './ActionTypes'


// 액션 생성자들
export function increment (){
    return {
        type : types.INCREMENT
    }
}

export function decrement (){
    return {
        type : types.DECREMENT
    }
}

export function setColor (color){
    return {
        type : types.SET_COLOR,
        color : color
    }
}