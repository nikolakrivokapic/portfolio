import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

export class Skills extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                    <span>Skill 1</span>
                </TextArea>
                <TextArea>
                    <span>Skill 2</span>
                </TextArea>
            </Container>
        );
    }
}

export default Skills;
