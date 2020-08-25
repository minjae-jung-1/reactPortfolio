import React from 'react';
import Home from '../components/Home'
import Carousel from '../components/Carousel'

function Homepage(props){
    return(
        <div>
            <Home title={props.title} subTitle={props.subTitle} text={props.text}></Home>
            <Carousel></Carousel>
        </div>
    )
}

export default Homepage