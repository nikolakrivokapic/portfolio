import React, { Component } from 'react';
import Gallery from '../carousel';

import { Container, TextArea } from '../common-styles/styles';

export class Projects extends Component {
  render() {
    return (
      <Container visible={this.props.visible}>
        <TextArea small={true}>
          <span>These are some example projects that I've been involved in throughout career</span>
        </TextArea>
        <Gallery
          images={require
            .context('../../assets/projects', false, /\.(png|jpe?g|svg)$/)
            .keys()
            .map(item => item.replace('./', 'assets/'))}
          type="projects"
        />
      </Container>
    );
  }
}

export default Projects;
