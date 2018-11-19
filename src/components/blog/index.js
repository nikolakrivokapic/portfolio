import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

export class Blog extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea>
                <span>Coming Soon...</span>
                </TextArea>
            </Container>
        );
    }
}

export default Blog;
