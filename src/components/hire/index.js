import React, {Component} from 'react';

import {Container} from '../common-styles/styles';

import {TextArea, Inputs, Input, InputWrapper, Button} from './styles';

export class Hire extends Component {
  render() {
    return (
        <Container visible={this.props.visible}>
            <TextArea>
                <span>If you want to get touch with me, feel free to do so.</span>
                <form action="https://formspree.io/nikolakrivokapic84@gmail.com" method="POST">
                    <Inputs>
                        <InputWrapper>
                            <Input name="txtSearch" type="text" name="email" />
                Your email
                        </InputWrapper>
                        <InputWrapper>
                            <Input name="txtSearch" type="text" name="message" />
                Message
                        </InputWrapper>
                    </Inputs>
                    <Button type="submit">Send</Button>
                </form>
                <div style={{marginTop: '15px'}}>Or contact me via:</div>
                <div>Email: nikolakrivokapic84@gmail.com</div>
                <div>Tel: +38267220449</div>
                <div>Skype: nikolakriokapic (no v)</div>
            </TextArea>
        </Container>
    );
  }
}

export default Hire;
