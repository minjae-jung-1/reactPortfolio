import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'

import Card from './Card'
import directory from '../assets/images/employeedirectory.png'
import budget from '../assets/images/budgetTracker.png'
import bird from '../assets/images/BirdFiner.png'


class Carousel extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          items:[
              {
                  id:0,
                  title: "React Employee Directory",
                  subTitle: "A react based employee directory with filter and serach features.",
                  imgSrc: directory,
                  link: "https://secret-chamber-32962.herokuapp.com/" ,
                  selected: false

              },
              {
                  id:1,
                  title: "Budget Tracker",
                  subTitle: "A budget tracker that makes use of localstorage to function offline",
                  imgSrc: budget,
                  link: "https://radiant-island-24026.herokuapp.com/",
                  selected: false

              },
              {
                  id:2,
                  title: "BirdFinder App",
                  subTitle: "An app that returns all your bird data needs",
                  imgSrc: bird,
                  link: "https://github.com/jaddamo/BirdFinder-App",
                  selected: false

              },
          ]
      }
  }

  handleCardClick = (id,card) => {
      let items = [...this.state.items];
      items[id].selected = items[id].selected ? false: true;
      items.forEach(item =>{
          if(item.id !== id){
              item.selected = false;
          }
      });

      this.setState({
          items
      });
  }

  makeItems = (items) => {
      return items.map(item => {
          return <Card item={item} click={(event => this.handleCardClick(item.id, event))} key={item.id} />
      })
  }


  render(){
      return(
          <Container fluid={true}>
              <Row className="justify-content-around">
                  {this.makeItems(this.state.items)}
              </Row>
          </Container>
      )
  }
}
export default Carousel