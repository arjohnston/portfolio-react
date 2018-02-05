import React, { Component } from 'react'
import './projects.css'
import ContentSection from '../../components/content-section/ContentSection'

var Link = require('react-router-dom').Link

export default class Portfolio extends Component {
  render () {
    return (
      <div className='project-wrapper'>
        <ContentSection>
          <div className='pane-800 center'>
            <a
              className='project'
              href='https://emergencyuniversity.com'
              target='_blank'
              rel='noopener noreferrer'
              >
              <div className='project-image-wrapper'>
                <img src={require('../../assets/projects/eu.png')} alt='Emergency University' />
              </div>
              <div className='project-content'>
                <h2>
                  Emergency University
                </h2>
                <p>
                  A react site, powered by next.js. Built from scratch for Emergency University inc.
                </p>
              </div>
              <div className='project-right-arrow'>
                <img src={require('../../assets/right-arrow.svg')} alt='right arrow' />
              </div>
            </a>
            <Link className='project' to='/projects/pixelated'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/projects/mario.png')} alt='sidescroller' />
              </div>
              <div className='project-content'>
                <h2>
                  Pixelated
                </h2>
                <p>
                  A sidescroller RPG built with create-react-app. Built for fun
                </p>
              </div>
              <div className='project-right-arrow'>
                <img src={require('../../assets/right-arrow.svg')} alt='right arrow' />
              </div>
            </Link>
            <Link className='project' to='/projects/markdown-editor'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/projects/markdown.png')} alt='markdown previewer' />
              </div>
              <div className='project-content'>
                <h2>
                  Markdown Editor
                </h2>
                <p>
                  Inspired by the FreeCodeCamp cirriculum, this is a build tool for Github's markdown files.
                </p>
              </div>
              <div className='project-right-arrow'>
                <img src={require('../../assets/right-arrow.svg')} alt='right arrow' />
              </div>
            </Link>
            <Link className='project' to='/projects/simon'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/projects/simon.png')} alt='simon says' />
              </div>
              <div className='project-content'>
                <h2>
                  Simon Says
                </h2>
                <p>
                  A Simon Says game, inspired by the FreeCodeCamp cirriculum. Built originally with vanilla javascript, now converted to React.js using create-react-app.
                </p>
              </div>
              <div className='project-right-arrow'>
                <img src={require('../../assets/right-arrow.svg')} alt='right arrow' />
              </div>
            </Link>
            <Link className='project' to='/projects/tic-tac-toe'>
              <div className='project-image-wrapper'>
                <img src={require('../../assets/projects/tictactoe.png')} alt='tic tac toe' />
              </div>
              <div className='project-content'>
                <h2>
                  Tic Tac Toe
                </h2>
                <p>
                  Inspired by the FreeCodeCamp cirriculum, this is a fully functional tic-tac-toe game, against a variable difficulty AI.
                </p>
              </div>
              <div className='project-right-arrow'>
                <img src={require('../../assets/right-arrow.svg')} alt='right arrow' />
              </div>
            </Link>
          </div>
        </ContentSection>
      </div>
    )
  }
}
