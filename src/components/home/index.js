import React, { Component } from 'react';

import { Container, TextArea } from '../common-styles/styles';

import texts from './texts';

export class Home extends Component {
  render() {
    return (
      <Container home={true} visible={this.props.visible}>
        <TextArea>
          <span>{texts.text1}</span>
        </TextArea>
        <TextArea>
          <span>
            {texts.text4}
            <a
              style={{ color: '#022e3bc4' }}
              target="_blank"
              href="https://en.wikipedia.org/wiki/Smart_Sparrow"
            >
              {' '}
              Smart Sparrow{' '}
            </a>
            {texts.text2}
          </span>
        </TextArea>
        <TextArea>
          <span>
            From 2019 and ongoing, I am proudly working for
            <a
              style={{ color: '#022e3bc4' }}
              target="_blank"
              href="https://en.wikipedia.org/wiki/Paperpile"
            >
              {' '}
              Paperpile{' '}
            </a>{' '}
            where we work on scientific papers and reference management applications for various
            platforms, used by thousands of scientists and students from all over the world.
          </span>
        </TextArea>
        <TextArea>
          <span>{texts.text3}</span>
        </TextArea>
      </Container>
    );
  }
}

export default Home;
