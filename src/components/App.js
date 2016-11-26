import React from 'react';

class App extends React.Component {
    render(){
        let text = "Hello World!";
        let style = {
            backgroundColor : 'aqua'
        };
        return (
            <div>
                /* Comment */
                <h1 style={style}>{text}</h1>
                <p>this is p</p>
            </div>
        );
    }
}

export default App;