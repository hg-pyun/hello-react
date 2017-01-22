import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import { createStore } from 'redux'  // 1. 스토어를 불러온다.
import reducers from './reducers'    // 2. Reducers 를 불러온다.
import { Provider } from 'react-redux'

const store = createStore(reducers);  // 3. store을 생성한다.

/*
 *  Store로 할 수 있는 일
 *  1. getState
 *  2. dispatch
 *  3. subscribe(callback)
 */

// import * as actions from './actions'

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200,200,200]));
// unsubscribe();  // unsubscribe 실행, 더 이상 callback이 실행되지 않음.
// store.dispatch(actions.setColor([210,210,210]));  이제 안찍힌다.

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp/>
            </Provider>,
            document.getElementById('root')
        );
    });
}