import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <JSXExam />
                <PropsExam name="props example">이사이에 있는거</PropsExam>
                <PropsExam>이사이에 있는거</PropsExam>
            </div>
        )
    }
}

class JSXExam extends React.Component {
    render (){
        let text = "Hello World!";
        let style = {
            backgroundColor : 'aqua'
        };
        return (
            <div>
                /* Comment */
                <h1> JSX Example</h1>
                <p style={style}>{text}</p>
            </div>
        );
    }
}

class PropsExam extends React.Component {
    render (){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

PropsExam.defaultProps = {
    name : "Props Unknown"
};

// PropsExam.propTypes = {
//     name : React.propTypes.string
// };

export default App;