import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Card from '../../components/card/Card'

export default class extends Component {
  render () {
    return (
      <div style={{ paddingTop: '48px' }}>
        <Helmet>
          <title>projects</title>
          <meta
            name='description'
            content='Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
          />
          <link rel='canonical' href='https://arjohnston.io/projects' />
        </Helmet>
        <div className='grid' style={{ margin: '72px 0' }}>
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
              <Card
                size='two-by-one'
                name='Tic Tac Toe'
                projectLink='/projects/tic-tac-toe'
                image='/images/projects/tictactoe.png'
                languageIcon='/svg/language-icons/react.svg'
                githubLink='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/tic-tac-toe'
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
              <Card
                size='two-by-one'
                name='Bloc'
                projectLink='/projects/bloc'
                image='/images/projects/bloc.png'
                languageIcon='/svg/language-icons/swift.svg'
                githubLink='https://github.com/arjohnston/Bloc'
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
              <Card
                size='two-by-one'
                name='Directions'
                projectLink='/projects/directions'
                image='/images/projects/directions.png'
                languageIcon='/svg/language-icons/swift.svg'
                githubLink='https://github.com/arjohnston/Directions'
              />
            </div>
          </div>

          <div className='grid-row'>
            <div className='grid-section width-40'>
              <Card
                size='two-by-one'
                name='portfolio'
                projectLink='/projects/portfolio'
                image='/images/projects/portfolio.png'
                languageIcon='/svg/language-icons/react.svg'
                githubLink='https://github.com/arjohnston/portfolio-react'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
