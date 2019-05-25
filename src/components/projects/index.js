import React, {Component} from 'react';
import Gallery from '../carousel';

import {Container} from '../common-styles/styles';

export class Projects extends Component {
  render() {
    return (
        <Container visible={this.props.visible}>
            <Gallery
                images={require
            .context('../../assets/projects', false, /\.(png|jpe?g|svg)$/)
            .keys()
            .map((item) => item.replace('./', 'assets/'))}
                type="projects"
            />
        </Container>
    );
  }
}

export default Projects;
