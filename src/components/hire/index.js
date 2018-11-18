import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

export class Hire extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                    <span>Contact Form</span>
                </TextArea>
            </Container>
        );
    }
}

export default Hire;
