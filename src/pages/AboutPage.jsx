import React from 'react';
import Home from '../components/Home'
import Content from '../components/Content'
//creating our aboutpage component
function AboutPage(props){
  return(
      <div>
          <Home title={props.title}></Home>
          <Home subtitle={props.subtitle}></Home>
          <Content>Hello</Content>
      </div>
  )
}

export default AboutPage