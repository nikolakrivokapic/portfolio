import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import background from '../../assets/bg.png';
import fb from '../../assets/fb.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import profile from '../../assets/profile.png';
import setCurrentPage from '../../actions/set-current-page';
import Home from '../../components/home';
import Projects from '../../components/projects';
import Skills from '../../components/skills';
import Hire from '../../components/hire';

import {
  Container,
  Profile,
  Icon,
  Icons,
  BgImage,
  MenuMobile,
  Badge,
  Header,
  HeaderTitle,
  HeaderSmallText,
  Li,
} from './styles';

export class MainComponent extends Component {
  handleClick(page) {
    this.props.setCurrentPage(page);
  }

  redirectTo(page) {
    window.open(page, '_blank');
  }

  render() {
    const {currentPage} = this.props;

    return (
        <Container>
            <BgImage currentPage={this.props.currentPage}>
                <img src={background} />
            </BgImage>
            <Header>
                <Profile src={profile} />
                <HeaderTitle>
                    <div>Nikola Krivokapic</div>
                    <HeaderSmallText>Software / Web Developer</HeaderSmallText>
                </HeaderTitle>
            </Header>

            <Icons>
                <Icon src={fb} onClick={this.redirectTo.bind(this, 'https://www.facebook.com/nikolakriokapic')} />
                <Icon
                    src={linkedin}
                    onClick={this.redirectTo.bind(this, 'https://www.linkedin.com/in/nikolakrivokapic84/linkedin')}
                />
                <Icon src={github} onClick={this.redirectTo.bind(this, 'https://github.com/nikolakrivokapic')} />
            </Icons>
            <MenuMobile>
                <ul>
                    <Li active={currentPage === 'home'}>
                        <a onClick={this.handleClick.bind(this, 'home')}>Home</a>
                    </Li>
                    <Li active={currentPage === 'projects'}>
                        <a onClick={this.handleClick.bind(this, 'projects')}>Portfolio</a>
                    </Li>
                    <Li active={currentPage === 'skills'}>
                        <a onClick={this.handleClick.bind(this, 'skills')}>Tech-Stack</a>
                    </Li>
                    <Li active={currentPage === 'hire'}>
                        <a onClick={this.handleClick.bind(this, 'hire')}>Hire me</a>
                    </Li>
                </ul>
            </MenuMobile>
            <Home visible={this.props.currentPage === 'home'} />
            <Projects visible={this.props.currentPage === 'projects'} />
            <Skills visible={this.props.currentPage === 'skills'} />
            <Hire visible={this.props.currentPage === 'hire'} />
            <Badge onClick={() => this.redirectTo('https://www.linkedin.com/in/nikolakrivokapic84')}>
                <div
                    className="LI-profile-badge"
                    data-version="v1"
                    data-size="medium"
                    data-locale="en_US"
                    data-type="horizontal"
                    data-theme="dark"
                    data-vanity="nikolakrivokapic84"
                >
                    <a className="LI-simple-link" href="https://cs.linkedin.com/in/nikolakrivokapic84?trk=profile-badge">
              Nikola Krivokapic
                    </a>
                </div>
            </Badge>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
