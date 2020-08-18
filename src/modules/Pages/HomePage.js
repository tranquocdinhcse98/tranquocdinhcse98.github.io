import React, { Component } from 'react';
import Navigation from '../../components/Header';
import Footer from '../../components/Footer';
import avatar from '../../assets/images/avatar.jpg';
import {Link} from 'react-router-dom';
import Loading from '../../components/Loading';
import SocialMediaBar from '../../components/SocialMediaBar';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000
    );
  }

  render() {
    return (
      <div className="main">
        <Loading show={this.state.loading} />
        {!this.state.loading ? (
          <div>
            <header>
              <Navigation />
              <div className="text-box">
                <h3 className="heading-primary">
                  <span className="heading-primary_sub">Hello, I'm</span>
                  <span className="heading-primary_name">Dinh Tran</span>
                  <span className="heading-primary_job">Web Developer</span>
                </h3>
                <Link to="/about" className="btn primary">
                  Get more
                </Link>
              </div>
            </header>

            <div id="about" className="white-container">
              <div className="container">
                <div className="about-avatar">
                  <img src={avatar} />
                </div>
                <div className="about-content">
                  <h2>About me</h2>
                  <p>
                    Hello. My name is Trần Quốc Định. I'm a Web developer. I was
                    born and grew up in Thua Thien Hue province. I have been to
                    Ho Chi Minh city for some years. At the present, I have been
                    studying Computer Science at Ho Chi Minh City University Of
                    Technology (HCMUT). If you care about me, please click the
                    following button to get more information. Thanks!
                  </p>
                  <Link to="/about" className="btn info">
                    More Info
                  </Link>
                </div>
              </div>
            </div>

            <SocialMediaBar />

            <Footer />
          </div>
        ) : null}
      </div>
    );
  }
}

export default HomePage;
