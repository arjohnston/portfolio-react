import React, { Component } from 'react'
import Card from '../../components/card/Card'
import './home.css'
const Link = require('react-router-dom').Link

const heroText = [
  'web developer.',
  'creator.',
  'designer.'
]
const HERO_TEXT_ANIMATION_INTERVAL = 1500

export default class Home extends Component {
  constructor () {
    super()

    this.state = {
      heroTextIndex: null,
      heroTextStyle: null,
      textAnimationTimer: null
    }
  }

  componentDidMount () {
    this.startTextAnimationTimer()
  }

  startTextAnimationTimer () {
    setTimeout(this.openText.bind(this), HERO_TEXT_ANIMATION_INTERVAL)
  }

  openText () {
    let callback = () => {
      this.setState({
        animating: false,
        heroTextStyle: {
          maxWidth: '100%'
        }
      }, () => {
        this.closeText()
      })

      delete this.openTextAnimation
    }

    this.setState({
      animating: true,
      heroTextIndex: this.state.heroTextIndex >= heroText.length - 1 || this.state.heroTextIndex === null ? 0 : this.state.heroTextIndex + 1
    }, () => {
      this.setState({
        heroTextStyle: {
          maxWidth: '100%',
          transition: `max-width ${HERO_TEXT_ANIMATION_INTERVAL}ms steps(30)`
        }
      })
      let closeAnimationDelay = 1000
      this.openTextAnimation = setTimeout(callback, HERO_TEXT_ANIMATION_INTERVAL + closeAnimationDelay)
    })
  }

  closeText () {
    let callback = () => {
      this.setState({
        animating: false,
        heroTextStyle: null
      }, () => {
        this.openText()
      })

      delete this.closeTextAnimation
    }

    this.setState({
      animating: true
    }, () => {
      this.setState({
        heroTextStyle: {
          maxWidth: '0px',
          transition: `max-width ${HERO_TEXT_ANIMATION_INTERVAL}ms steps(30)`
        }
      })
      let openAnimationDelay = 100
      this.closeTextAnimation = setTimeout(callback, HERO_TEXT_ANIMATION_INTERVAL + openAnimationDelay)
    })
  }

  render () {
    return (
      <div>
        <div className='home-wrapper'>
          <section className='hero'>
            <div className='hero-wrapper'>
              <h1>andrew johnston</h1>
              <span
                style={this.state.heroTextStyle}
              >
                {heroText[this.state.heroTextIndex === null ? 0 : this.state.heroTextIndex]}
              </span>
            </div>
          </section>

          <section className='portfolio'>
            <div className='grid'>
              <div className='grid-section'>
                <Card
                  size='four-by-four'
                  name='Emergency University'
                  projectLink='/projects/emergency-university'
                  image='/images/projects/eu.png'
                  languageIcon='/svg/language-icons/react.svg'
                  githubLink='#'
                />
              </div>

              <div className='grid-section'>
                <Card
                  name='Pixelated'
                  projectLink='/projects/pixelated'
                  image='/images/projects/mario.png'
                  languageIcon='/svg/language-icons/react.svg'
                  githubLink='#'
                />

                <Card
                  name='Tic Tac Toe'
                  projectLink='/projects/tic-tac-toe'
                  image='/images/projects/tictactoe.png'
                  languageIcon='/svg/language-icons/react.svg'
                  githubLink='#'
                />

                <Card
                  name='Markdown Editor'
                  projectLink='/projects/markdown-editor'
                  image='/images/projects/markdown.png'
                  languageIcon='/svg/language-icons/react.svg'
                  githubLink='#'
                />

                <Card
                  name='Simon Says'
                  projectLink='/projects/simon'
                  image='/images/projects/simon.png'
                  languageIcon='/svg/language-icons/react.svg'
                  githubLink='#'
                />
              </div>
            </div>

            <Link
              className='portfolio-cta'
              to='/projects/'
            >
              view all projects
            </Link>
          </section>

          <div className='profile-image'>
            <img
              src='/images/profile-sm.png'
              alt='andrew johnston'
            />
          </div>

          <section className='about'>
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
      </div>
    )
  }
}
