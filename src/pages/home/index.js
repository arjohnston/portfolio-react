import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Card from '../../components/card/Card'
import './home.css'

const heroText = ['web developer.', 'creator.', 'designer.']
const HERO_TEXT_ANIMATION_INTERVAL = 1500

export default class Home extends Component {
  constructor () {
    super()

    this.state = {
      heroTextIndex: null,
      heroTextStyle: null,
      textAnimationTimer: null,
      pageLoaded: false
    }
  }

  componentDidMount () {
    this.startTextAnimationTimer()
  }

  startTextAnimationTimer () {
    let startDelay = 500
    setTimeout(
      this.openText.bind(this),
      HERO_TEXT_ANIMATION_INTERVAL - startDelay
    )

    setTimeout(() => {
      this.setState({
        pageLoaded: true
      })
    }, 50)
  }

  openText () {
    let callback = () => {
      this.setState(
        {
          animating: false,
          heroTextStyle: {
            maxWidth: '100%'
          }
        },
        () => {
          this.closeText()
        }
      )

      delete this.openTextAnimation
    }

    this.setState(
      {
        animating: true,
        heroTextIndex:
          this.state.heroTextIndex >= heroText.length - 1 ||
          this.state.heroTextIndex === null
            ? 0
            : this.state.heroTextIndex + 1
      },
      () => {
        this.setState({
          heroTextStyle: {
            maxWidth: '100%',
            transition: `max-width ${HERO_TEXT_ANIMATION_INTERVAL}ms steps(30)`
          }
        })
        let closeAnimationDelay = 1000
        this.openTextAnimation = setTimeout(
          callback,
          HERO_TEXT_ANIMATION_INTERVAL + closeAnimationDelay
        )
      }
    )
  }

  closeText () {
    let callback = () => {
      this.setState(
        {
          animating: false,
          heroTextStyle: null
        },
        () => {
          this.openText()
        }
      )

      delete this.closeTextAnimation
    }

    this.setState(
      {
        animating: true
      },
      () => {
        this.setState({
          heroTextStyle: {
            maxWidth: '0px',
            transition: `max-width ${HERO_TEXT_ANIMATION_INTERVAL}ms steps(30)`
          }
        })
        let openAnimationDelay = 100
        this.closeTextAnimation = setTimeout(
          callback,
          HERO_TEXT_ANIMATION_INTERVAL + openAnimationDelay
        )
      }
    )
  }

  render () {
    let heroTextIndex =
      this.state.heroTextIndex === null ? 0 : this.state.heroTextIndex

    return (
      <div>
        <Helmet>
          <title>andrew johnston</title>
          <meta
            name='description'
            content='Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
          />
          <link rel='canonical' href='https://arjohnston.io/' />
        </Helmet>
        <div className='home-wrapper'>
          <section
            className={`home-hero${this.state.pageLoaded ? ' active' : ''}`}
          >
            <div className='hero-wrapper'>
              <h1>andrew johnston</h1>
              <span style={this.state.heroTextStyle}>
                {heroText[heroTextIndex]}
              </span>
            </div>
          </section>

          <section
            className={`portfolio${this.state.pageLoaded ? ' active' : ''}`}
          >
            <div className='grid'>
              <h1 style={{ marginBottom: '60px', fontWeight: '200' }}>
                notable projects
              </h1>
              <div className='grid-row'>
                <div className='grid-section width-40'>
                  <Card
                    size='four-by-four'
                    name='Custom Dashboard'
                    projectLink='/projects/dashboard'
                    image='/images/projects/dashboard.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/eu-cms'
                  />
                </div>

                <div className='grid-section width-20'>
                  <Card
                    size='two-by-one'
                    name='Boilerplates'
                    projectLink='/projects/boilerplates'
                    image='/images/projects/boilerplates.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/boilerplates'
                  />

                  <Card
                    size='two-by-one'
                    name='Simon Says'
                    projectLink='/projects/simon'
                    image='/images/projects/simon.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/simon'
                  />
                </div>

                <div className='grid-section width-40'>
                  <Card
                    size='four-by-four'
                    name='Emergency University'
                    projectLink='/projects/emergency-university'
                    image='/images/projects/eu.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/eu-react'
                  />
                </div>
              </div>

              <div className='grid-row'>
                <div className='grid-section width-20'>
                  <Card
                    size='two-by-one'
                    name='Markdown Editor'
                    projectLink='/projects/markdown-editor'
                    image='/images/projects/markdown.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor'
                  />
                </div>

                <div className='grid-section width-40'>
                  <Card
                    size='two-by-one'
                    name='www.massnotification.com'
                    projectLink='/projects/mass-notification'
                    image='/images/projects/mass-notification.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='#'
                  />
                </div>

                <div className='grid-section width-40'>
                  <Card
                    size='two-by-one'
                    name='Pixelated'
                    projectLink='/projects/pixelated'
                    image='/images/projects/mario.png'
                    languageIcon='/svg/language-icons/react.svg'
                    githubLink='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/pixelated'
                  />
                </div>
              </div>
            </div>

            <Link className='portfolio-cta' to='/projects/'>
              view all projects
            </Link>
          </section>

          <div className='profile-image'>
            <picture>
              <source type='image/webp' srcSet='/images/profile-sm.webp' />
              <img src='/images/profile-sm.png' alt='Andrew Johnston' />
            </picture>
          </div>

          <section className={`about${this.state.pageLoaded ? ' active' : ''}`}>
            <div className='about-wrapper'>
              <p>
                Andrew is a professional front end web developer, with full
                stack experience. He works daily in a collaborive environment to
                make life-saving tools for people.
              </p>

              <p>
                In his spare time, Andrew attends skill-developent programs,
                creates side-projects and explores new technologies. When he's
                not coding, you can find him with family and a craft brew in
                hand.
              </p>

              <p>
                Andrew is furthering his education with back-end development and
                is motivated towards specializing in Machine Learning.
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
