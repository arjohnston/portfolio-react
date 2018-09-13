import React, { Component } from 'react'
import Card from '../../components/card/Card'
import './home.css'
var Link = require('react-router-dom').Link

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className='home-wrapper'>
          <section className='hero-wrapper'>
            <h1>andrew johnston</h1>
            <span>react.js developer</span>
            <span className='span-break'>&nbsp;⁃&nbsp;</span>
            <span>creator</span>
            <span className='span-break'>&nbsp;⁃&nbsp;</span>
            <span>designer&nbsp;</span>
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
