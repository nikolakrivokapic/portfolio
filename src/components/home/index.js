import React, {Component} from 'react';

import {Container, TextArea} from '../common-styles/styles';

import texts from './texts';

export class Home extends Component {
  render() {
    return (
        <Container home={true} visible={this.props.visible}>
            <TextArea>
                <span>
                    {texts.text1}
                    <a style={{color: '#022e3bc4'}} target="_blank" href="https://en.wikipedia.org/wiki/Smart_Sparrow">
                        {' '}
              Smart Sparrow{' '}
                    </a>
                    {texts.text2}
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
