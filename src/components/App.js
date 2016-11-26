import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <JSXExam />
                <PropsExam name="Props example">이사이에 있는거</PropsExam>
                <PropsExam>이사이에 있는거</PropsExam>
                <Counter/>
                <Contact/>
            </div>
        )
    }
}
/**
 *  JSX
 */
class JSXExam extends React.Component {
    render (){
        let text = "Hello World!";
        let style = {
            backgroundColor : 'aqua'
        };
        return (
            <div>
                { /* Comment */ }
                <h1> JSX Example</h1>
                <p style={style}>{text}</p>
            </div>
        );
    }
}


/**
 *  Props
 */
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

/**
 *  State
 */
class Counter extends React.Component {

    constructor(props){
        super(props); // super props를 해줘야 state에 접근할 수 있음
        this.state = {
            value : 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            value : this.state.value + 1
        });
    }

    render(){
        return (
            <div>
                <h1>State Example</h1>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>Press Me</button>
            </div>
        )
    }
}

/**
 *  Component Mapping
 */
class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contactData : [
                {name:'Abet', phone:'010-0000-0001'},
                {name:'Betty', phone:'010-0000-0002'},
                {name:'Charlie', phone:'010-0000-0003'},
                {name:'David', phone:'010-0000-0004'}
            ]
        }
    }

    render(){
        const mapToComponent = (data) => {
            return data.map((contact, i) =>{ // callback (currentValue, index, array)
                console.log(contact, i);
                return (<ContactInfo contact={contact} key={i}/>); // props로 객체를 넘길수도 있음
            })
        };

        return (
            <div>
                <h1>Component Mapping</h1>
                {mapToComponent(this.state.contactData)}
            </div>
        )
    }
}

class ContactInfo extends React.Component {
    render(){
        return (
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        )
    }
}

export default App;