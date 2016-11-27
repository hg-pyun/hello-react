import React from 'react';
import ContactInfo from './ContactInfo'

export default class Contact extends React.Component {

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