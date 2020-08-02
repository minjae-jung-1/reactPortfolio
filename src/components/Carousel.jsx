import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'

import Card from './Card'
import ponyo from '../assets/images/Ponyo.png'
import whispers from '../assets/images/Whispers.png'
import spirited from '../assets/images/Spirited.png'


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[
                {
                    id:0,
                    title: "Project 1",
                    subTitle: "heres what i did",
                    imgSrc: ponyo,
                    link: "https://github.com/minjae-jung-1" ,
                    selected: false

                },
                {
                    id:1,
                    title: "Project 1",
                    subTitle: "heres what i did",
                    imgSrc: whispers,
                    link: "https://github.com/minjae-jung-1",
                    selected: false

                },
                {
                    id:2,
                    title: "Project 2",
                    subTitle: "heres what i did",
                    imgSrc: spirited,
                    link: "https://github.com/minjae-jung-1",
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