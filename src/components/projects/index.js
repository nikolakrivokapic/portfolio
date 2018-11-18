import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

export class Projects extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                    <span>Project 1</span>
                </TextArea>
                <TextArea>
                    <span>Project 2</span>
                </TextArea>
            </Container>
        );
    }
}

export default Projects;
