import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

import texts from './texts';

export class Home extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                    <span>{texts.text1}</span>
                </TextArea>
                <TextArea>
                    <span>{texts.text2}</span>
                </TextArea>
            </Container>
        );
    }
}

export default Home;
