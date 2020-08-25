import React from 'react';
import Home from '../components/Home'
import Content from '../components/Content'
//creating our aboutpage component
function AboutPage(props){
  return(
      <div>
          <Home title={props.title}></Home>
          <Home subtitle={props.subtitle}></Home>
          <Content>Hello, I am an engineering student who enjoys developing in javascript. I am currently Full-stack and can comfortably work with the MERN stack</Content>
      </div>
  )
}

export default AboutPage