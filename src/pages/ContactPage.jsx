import React from 'react';
//creating our contactpage component
class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }
    render(){
        return(
            <p>Contact Page Works</p>
        )
    }
}

export default ContactPage