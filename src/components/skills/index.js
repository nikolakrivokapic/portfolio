import React, {Component} from 'react';
import Gallery from '../carousel';

import {Container} from '../common-styles/styles';

export class Skills extends Component {
  render() {
    return (
        <Container visible={this.props.visible}>
            <Gallery
                images={require
            .context('../../assets/skills', false, /\.(png|jpe?g|svg)$/)
            .keys()
            .map((item) => item.replace('./', 'assets/'))}
                type="skills"
            />
        </Container>
    );
  }
}

export default Skills;
