import React from 'react';
import Counter from './Counter'

export default class App extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}