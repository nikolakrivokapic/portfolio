import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

export default class Gallery extends Component {
    render() {
        return (
            <Carousel className={'carousel-container ' + this.props.type} transitionTime={800} showStatus={false} >
                {
                    this.props.images.map((image, i) => <img key={i} src={image} />)
                }
            </Carousel>
        );
    }
}
