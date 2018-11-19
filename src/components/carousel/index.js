import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {images: []};
    }

    importAll(r) {
        return r.keys().map((item) => item.replace('./', 'assets/'));
    }

    componentDidMount() {
        const images = this.importAll(require.context('../../assets/projects', false, /\.(png|jpe?g|svg)$/));
        this.setState({images});
    }

    render() {
        return (
            <Carousel className="carousel-container" transitionTime={800} showStatus={false} >
                {
                    this.state.images.map((image, i) => {
                        return (
                            <img key={i} src={image} />
                        );
                    })
                }
            </Carousel>
        );
    }
}
