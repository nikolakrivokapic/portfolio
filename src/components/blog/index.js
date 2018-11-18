import React, {Component} from 'react';

import {
    Container,
    TextArea,
} from '../common-styles/styles';

export class Blog extends Component {
    render() {
        return (
            <Container visible={this.props.visible}>
                <TextArea><span>Blogpost 1</span>
                </TextArea>
                <TextArea>
                <span>Blogpost 2</span>
                </TextArea>
            </Container>
        );
    }
}

export default Blog;
