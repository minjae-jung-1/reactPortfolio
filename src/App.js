import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

//importing all the dependencies
//import bootstrap and all the bootstrap methods

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      title: "Minjae",
      headerLinks: [
        {
          title: 'Home', path: '/'
        },
        {
          title: 'About', path: '/about'
        },{
          title: 'Contact', path: '/contact'
        },
      ],
      home: {
        title: "Welcome ",
        subTitle: "My work thus far",
        text: "Always learning more!"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      }
    }
  }
    render(){
      //we will return html that will be rendered 
      //these html divs can contain components made with jsx.
      //classes can also be applied to these divs
      return (
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Minjae Jung</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navabar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* setting up our routes so that on click it will send them to the correct page */}
            <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}></HomePage>}></Route>
            <Route path="/About" exact render={()=> <AboutPage title={this.state.about.title} ></AboutPage>}></Route>
            <Route path="/contact" exact render={()=> <ContactPage title={this.state.contact.title} ></ContactPage>}></Route>

            <Footer></Footer>
          </Container>
        </Router>
      );
  }
    
     
  
}

export default App;
