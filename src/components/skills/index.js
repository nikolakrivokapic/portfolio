import React, { Component } from 'react';
import Gallery from '../carousel';

import { Container, TextArea } from '../common-styles/styles';

export class Skills extends Component {
  render() {
    return (
      <Container visible={this.props.visible}>
        <TextArea small={true}>
          <span>These are some of the technologies that I've been working with extensively</span>
        </TextArea>
        <Gallery
          images={require
            .context('../../assets/skills', false, /\.(png|jpe?g|svg)$/)
            .keys()
            .map(item => item.replace('./', 'assets/'))}
          type="skills"
        />
      </Container>
    );
  }
}

export default Skills;
