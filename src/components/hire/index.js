import React, {Component} from 'react';

import {
    Container,
} from '../common-styles/styles';

import {
    TextArea,
    Inputs,
    Input,
    InputWrapper,
    Button,
} from './styles';

export class Hire extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                    <span>I am available for freelance/contracting work. Write me a message, I want to hear about your project.</span>
                    <Inputs>
                        <InputWrapper><Input name="txtSearch" type="text" />Your email</InputWrapper>
                        <InputWrapper><Input name="txtSearch" type="text" />Message</InputWrapper>
                    </Inputs>
                    <Button>Send</Button>
                </TextArea>
            </Container>
        );
    }
}

export default Hire;
