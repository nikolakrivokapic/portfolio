import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import background from '../../assets/bg.jpg';
import fb from '../../assets/fb.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import profile from '../../assets/profile.png';
import setCurrentPage from '../../actions/set-current-page';
import Home from '../../components/home';
import Projects from '../../components/projects';
import Skills from '../../components/skills';
import Blog from '../../components/blog';
import Hire from '../../components/hire';

import {
    Container,
    MenuDesktop,
    Profile,
    Icon,
    Icons,
    BgImage,
    MenuMobile,
    Flag
} from './styles';

export class MainComponent extends Component {
    handleClick(page) {
        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <Container>
                <BgImage currentPage={this.props.currentPage}>
                    <img src={background} />
                </BgImage>
                <Profile src={profile} />
                <Icons>
                    <Icon src={fb} />
                    <Icon src={linkedin} />
                    <Icon src={github} />
                </Icons>
                <MenuDesktop>
                    <Flag visible={this.props.currentPage === 'home'}  onClick={this.handleClick.bind(this, 'home')}>Home</Flag>
                    <Flag visible={this.props.currentPage === 'projects'} onClick={this.handleClick.bind(this, 'projects')}>Projects</Flag>
                    <Flag visible={this.props.currentPage === 'skills'} onClick={this.handleClick.bind(this, 'skills')}>Tech-Stack</Flag>
                    { /* <Flag visible={this.props.currentPage === 'blog'} onClick={this.handleClick.bind(this,'blog')}>Blog</Flag> */ }
                    <Flag visible={this.props.currentPage === 'hire'} onClick={this.handleClick.bind(this,'hire')}>Hire me</Flag>
                </MenuDesktop>
                <MenuMobile>
                    <ul>
                        <li><a onClick={this.handleClick.bind(this, 'home')}>Home</a></li>
                        <li><a onClick={this.handleClick.bind(this, 'projects')} >Projects</a></li>
                        <li><a onClick={this.handleClick.bind(this, 'skills')}>Tech-Stack</a></li>
                        { /* <li><a onClick={this.handleClick.bind(this,'blog')}>Blog</a></li> */ }
                        <li><a onClick={this.handleClick.bind(this,'hire')}>Hire me</a></li>
                    </ul>
                </MenuMobile>
                <Home visible={this.props.currentPage === 'home'} />
                <Projects visible={this.props.currentPage === 'projects'} />
                <Skills visible={this.props.currentPage === 'skills'} />
                <Blog visible={this.props.currentPage === 'blog'} />
                <Hire visible={this.props.currentPage === 'hire'} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

MainComponent.propTypes = {
    currentPage: propTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
