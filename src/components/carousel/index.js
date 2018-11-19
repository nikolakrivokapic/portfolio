import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import project1 from '../../assets/projects/1.png';
import './styles.css';

export default class Gallery extends Component {
    render() {
        return (
            <Carousel className="carousel-container" width={300} autoPlay={1000} infiniteLoop={true} showStatus={false}>
                <div>
                    <img src={project1} />
                </div>
                <div>
                    <img src={project1} />
                </div>
                <div>
                    <img src={project1} />
                </div>
            </Carousel>
        );
    }
}
