import React, { Component } from 'react'
import './portfolio.css'
import ContentSection from '../content-section/ContentSection'

var Link = require('react-router-dom').Link

export default class Portfolio extends Component {
  render () {
    return (
      <div className='project-wrapper'>
        <ContentSection>
          <div className='pane-600 center'>
            <a
              className='project'
              href='http://ajohnston.emergencyuniversity.com'
              target='_blank'
              rel='noopener noreferrer'
              >
              <div className='project-image-wrapper'>
                <img src={require('../../assets/portfolio/eu.png')} alt='Emergency University' />
              </div>
              <div className='project-content'>
                <h2>
                  Emergency University
                </h2>
                <p>
                  A react site, powered by next.js. Built from scratch for Emergency University inc.
                </p>
              </div>
            </a>
            <Link className='project' to='/portfolio/sidescroller'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/portfolio/mario.png')} alt='sidescroller' />
              </div>
              <div className='project-content'>
                <h2>
                  Mario Clone
                </h2>
                <p>
                  A sidescroller RPG built with create-react-app. Built for fun
                </p>
              </div>
            </Link>
            <Link className='project' to='/portfolio/markdown'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/portfolio/markdown.png')} alt='markdown previewer' />
              </div>
              <div className='project-content'>
                <h2>
                  Markdown Builder
                </h2>
                <p>
                  Inspired by the FreeCodeCamp cirriculum, this is a build tool for Github's markdown files.
                </p>
              </div>
            </Link>
            <Link className='project' to='/portfolio/simon'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/portfolio/simon.png')} alt='simon says' />
              </div>
              <div className='project-content'>
                <h2>
                  Simon Says
                </h2>
                <p>
                  A Simon Says game, inspired by the FreeCodeCamp cirriculum. Built originally with vanilla javascript, now converted to React.js using create-react-app.
                </p>
              </div>
            </Link>
            <Link className='project' to='/portfolio/tictactoe'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/portfolio/tictactoe.png')} alt='tic tac toe' />
              </div>
              <div className='project-content'>
                <h2>
                  Tic Tac Toe
                </h2>
                <p>
                  Inspired by the FreeCodeCamp cirriculum, this is a fully functional tic-tac-toe game, against a variable difficulty AI.
                </p>
              </div>
            </Link>
          </div>
        </ContentSection>
      </div>
    )
  }
}
