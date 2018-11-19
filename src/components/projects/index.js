import React, {Component} from 'react';
import Gallery from '../carousel';

import {
    Container,
} from '../common-styles/styles';

export class Projects extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <Gallery/>
            </Container>
        );
    }
}

export default Projects;
