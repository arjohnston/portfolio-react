import React, { Component } from 'react'
import './home.css'

var Link = require('react-router-dom').Link

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSlide: null,
      animating: false
    }
  }

  componentDidMount () {
    this.setState({
      currentSlide: this.props.currentSlide
    })
  }

  nextArrow () {
    this.slideHandler(this.state.currentSlide + 1)
  }

  prevArrow () {
    this.slideHandler(this.state.currentSlide - 1)
  }

  slideHandler (index) {
    let targetSlide
    let slideCount = this.props.children.length

    if (index < 0) {
      targetSlide = index + slideCount
    } else if (index >= slideCount) {
      targetSlide = index - slideCount
    } else {
      targetSlide = index
    }

    this.setState({
      currentSlide: targetSlide
    })
  }

  renderSlides () {
    if (this.props.children.length > 1) {
      return React.Children.map(this.props.children, (child, index) => {
        let classNames = 'slide'
        if (index === this.state.currentSlide) {
          classNames += ' slide-active'
        }

        return React.cloneElement(child, {
          className: classNames
        })
      })
    } else {
      throw new Error('Need at least two slides')
    }
  }

  renderDots () {
    return (
      <div className='carousel-dot-wrapper'>
        {this.props.children.map((_i, index) => {
          let classNames = 'carousel-dot'
          if (index === this.state.currentSlide) {
            classNames += ' carousel-dot-active'
          }

          return (
            <div
              className={classNames}
              key={index}
              onClick={this.slideHandler.bind(this, index)}
            />
          )
        })}
      </div>
    )
  }

  render () {
    const LeftArrow = () =>
      <div
        className='button-left-arrow'
        onClick={this.prevArrow.bind(this)}
      >
        <svg viewBox='0 0 24 24' transform='scale(2)'>
          <path
            fill='#FFFFFF'
            d='M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
          />
        </svg>
      </div>

    const RightArrow = () =>
      <div
        className='button-right-arrow'
        onClick={this.nextArrow.bind(this)}
      >
        <svg viewBox='0 0 24 24' transform='scale(2)'>
          <path
            fill='#FFFFFF'
            d='M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z'
          />
        </svg>
      </div>

    const CloseButton = () =>
      <div
        className='button-close'
        onClick={this.props.handleClose}
        >
        <svg viewBox='0 0 24 24' transform='scale(2)'>
          <path
            fill='#FFFFFF'
            d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
          />
        </svg>
      </div>

    return (
      <div className='carousel-wrapper'>
        <div className='slide-track'>
          {this.renderSlides()}
        </div>

        <LeftArrow />
        <RightArrow />
        <CloseButton />

        {this.renderDots()}
      </div>
    )
  }
}

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      portfolioMenuOpen: false,
      currentSlide: null
    }
  }

  handleOpen (input) {
    this.setState({
      currentSlide: input
    }, () => {
      this.toggleMenu()
    })
  }

  handleClose () {
    this.setState({
      currentSlide: null
    }, () => {
      this.toggleMenu()
    })
  }

  toggleMenu () {
    this.setState({
      portfolioMenuOpen: !this.state.portfolioMenuOpen
    })
  }

  render () {
    const Main = () =>
      <div className='home-wrapper'>
        <section className='hero-wrapper'>
          <h1>andrew johnston</h1>
          <span>web developer</span>
          <span className='span-break'>&nbsp;⁃&nbsp;</span>
          <span>creator</span>
          <span className='span-break'>&nbsp;⁃&nbsp;</span>
          <span>designer&nbsp;</span>
        </section>

        <section className='portfolio'>
          <div className='portfolio-wrapper'>
            <div className='section-left'>
              <div
                className='col-wrapper-lg img-lg-1'
                onClick={this.handleOpen.bind(this, 0)}
              >
                <img
                  src={require('../../assets/portfolio/eu.png')}
                  alt='Emergency University'
                />
                <div className='img-overlay'>
                  <h2>Emergency University</h2>
                </div>
              </div>
              <div
                className='col-wrapper-md img-md-3'
                onClick={this.handleOpen.bind(this, 1)}
                >
                <img
                  src={require('../../assets/portfolio/mario.png')}
                  alt='Sidescroller'
                />
                <div className='img-overlay'>
                  <h2>Mario Clone</h2>
                </div>
              </div>
            </div>

            <div className='section-right'>
              <div
                className='col-wrapper-md img-md-1'
                onClick={this.handleOpen.bind(this, 2)}
                >
                <img
                  src={require('../../assets/portfolio/markdown.png')}
                  alt='Markdown Previewer'
                />
                <div className='img-overlay'>
                  <h2>Markdown Previewer</h2>
                </div>
              </div>
              <div
                className='col-wrapper-md img-md-2'
                onClick={this.handleOpen.bind(this, 3)}
                >
                <img
                  src={require('../../assets/portfolio/simon.png')}
                  alt='Simon Says'
                />
                <div className='img-overlay'>
                  <h2>Simon Says</h2>
                </div>
              </div>
              <div
                className='col-wrapper-md img-md-4'
                onClick={this.handleOpen.bind(this, 4)}
                >
                <img
                  src={require('../../assets/portfolio/tictactoe.png')}
                  alt='Tic Tac Toe'
                />
                <div className='img-overlay'>
                  <h2>Tic Tac Toe</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='about'>
          <div className='profile-image'>
            <img
              src={require('../../assets/profile-sm.png')}
              alt='andrew johnston'
            />
          </div>
          <div className='about-wrapper'>
            <p>
              Andrew is a professional front end web developer, with full stack experience. He works daily in a collaborive environment to make life-saving tools for people.
            </p>

            <p>
              In his spare time, Andrew attends skill-developent programs, creates side-projects and explores new technologies. When he's not coding, you can find him with family and a craft brew in hand.
            </p>

            <p>
              Andrew is furthering his education with back-end development and is motivated towards specializing in Machine Learning.
            </p>
          </div>
        </section>
      </div>

    const PortfolioMenu = () =>
      <div
        className={`portfolio-menu ${this.state.portfolioMenuOpen
          ? 'is-open'
          : ''}`}
        >
        <Carousel
          speed='300'
          handleClose={this.handleClose.bind(this)}
          currentSlide={this.state.currentSlide}
          >
          <div>
            <img
              src={require('../../assets/portfolio/eu.png')}
              alt='Emergency University'
              className='portfolio-menu-image'
            />
            <h2>
              Emergency University Inc.
            </h2>
            <p>
              Emergency Univesrity description. Two paragraphs broken into many...
            </p>
            <div className='cta-wrapper'>
              <Link
                className='portfolio-menu-cta'
                to='/portfolio/'
                >
                view site
              </Link>
              <a
                className='portfolio-menu-cta'
                href='http://github.com/arjohnston'
                target='_blank'
                rel='noopener noreferrer'
                >
                code
              </a>
            </div>
          </div>
          <div>
            <img
              src={require('../../assets/portfolio/mario.png')}
              alt='mario'
              className='portfolio-menu-image'
            />
            <h2>
              Mario Clone
            </h2>
            <p>
              Mario description. Two paragraphs broken into many...
            </p>
            <div className='cta-wrapper'>
              <Link className='portfolio-menu-cta'
                to='/portfolio/sidescroller'
                >
                play
              </Link>
              <a
                className='portfolio-menu-cta'
                href='http://github.com/arjohnston'
                target='_blank'
                rel='noopener noreferrer'
                >
                code
              </a>
            </div>
          </div>
          <div>
            <img
              src={require('../../assets/portfolio/markdown.png')}
              alt='markdown'
              className='portfolio-menu-image'
            />
            <h2>
              Markdown Previewer
            </h2>
            <p>
              Markdown description. Two paragraphs broken into many...
            </p>
            <div className='cta-wrapper'>
              <Link
                className='portfolio-menu-cta'
                to='/portfolio/markdown'
                >
                play
              </Link>
              <a
                className='portfolio-menu-cta'
                href='http://github.com/arjohnston'
                target='_blank'
                rel='noopener noreferrer'
                >
                code
              </a>
            </div>
          </div>
          <div>
            <img
              src={require('../../assets/portfolio/simon.png')}
              alt='simon'
              className='portfolio-menu-image'
            />
            <h2>
              Simon Says
            </h2>
            <p>
              Simons says description. Two paragraphs broken into many...
            </p>
            <div className='cta-wrapper'>
              <Link
                className='portfolio-menu-cta'
                to='/portfolio/simon'
                >
                play
              </Link>
              <a
                className='portfolio-menu-cta'
                href='http://github.com/arjohnston'
                target='_blank'
                rel='noopener noreferrer'
                >
                code
              </a>
            </div>
          </div>
          <div>
            <img
              src={require('../../assets/portfolio/tictactoe.png')}
              alt='Tic Tac Toe'
              className='portfolio-menu-image'
            />
            <h2>
              Tic Tac Toe
            </h2>
            <p>
              Tic Tac Toe description. Two paragraphs broken into many...
            </p>
            <div className='cta-wrapper'>
              <Link
                className='portfolio-menu-cta'
                to='/portfolio/tictactoe'
                >
                play
              </Link>
              <a
                className='portfolio-menu-cta'
                href='http://github.com/arjohnston'
                target='_blank'
                rel='noopener noreferrer'
                >
                code
              </a>
            </div>
          </div>
        </Carousel>
      </div>

    return (
      <div>
        <Main />
        <PortfolioMenu />
      </div>
    )
  }
}
