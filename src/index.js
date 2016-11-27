import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers);


console.log(store.getState())

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>
            ,
            document.getElementById('root')
        );
    });
}