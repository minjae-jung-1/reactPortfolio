import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Home from '../components/Home'
import Content from '../components/Content'
import Axios from 'axios'

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

  handleChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    // gonna set the value if the type of input is chcek box then = to check if not its gonna equal the value
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    // page gets refreshed if we press the submit button using prevent default we 
    // prevent the default action and keep the page from refreshing.

    this.setState({
      disabled: true
    });

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res =>{
        if(res.data.success){
          this.setState({
            disabled: false,
            emailSent: true
          });
        }else{
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      }).catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        })
      })
    //after we handle the submission, we disable the sending 
  }
  
  render(){
      return(
          <div>
            <Home title={this.props.title}></Home>

            <Content>
              <Container>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="full-name"> Full Name</Form.Label>
                    <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="email"> Email</Form.Label>
                    <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} ></Form.Control>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label htmlFor="Message"> Message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea"row="3" value={this.state.message} onChange={this.handleChange} ></Form.Control>
                  </Form.Group>

                  <Button className="d-inline-block right-side" variant="primary" type="submit" disabled={this.state.disabled}>Send

                  </Button>
                  
                  {/* did this send properly */ }

                  {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent</p>}
                  {this.state.emailSent === false && <p className="d-inline error-msg"> Email Not Sent</p>}


                </Form>
              </Container>
            </Content>
          </div>
      )
  }
}

export default ContactPage