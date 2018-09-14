import React, { Component } from 'react'
import { ProjectCard } from '../../components/card/Card'
import { Helmet } from 'react-helmet'
import ContentSection from '../../components/content-section/ContentSection'
import './projects.css'

export default class extends Component {
  render () {
    return (
      <div className='project-wrapper'>
        <Helmet>
          <title>projects</title>
          <meta
            name='description'
            content='Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
          />
          <link rel='canonical' href='https://arjohnston.io/projects' />
        </Helmet>
        <ContentSection>
          <div className='pane-800 center'>
            <ProjectCard
              name='Custom Dashboard'
              description='A fully custom dashboard, built on MERN, utilized as a content management system for Emergency University.'
              image='/images/projects/dashboard.png'
              projectLink='/projects/dashboard'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Emergency University'
              description='A react site, powered by next.js. Built from scratch for Emergency University inc.'
              image='/images/projects/eu.png'
              projectLink='/projects/emergency-university'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='www.massnotification.com'
              description='A subsidary website built using Next.js for Emergency University.'
              image='/images/projects/mass-notification.png'
              projectLink='/projects/mass-notification'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Pixelated'
              description='A sidescroller RPG built with create-react-app. Built for fun'
              image='/images/projects/mario.png'
              projectLink='/projects/pixelated'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Markdown Editor'
              description='Inspired by the FreeCodeCamp cirriculum, this is a build toolfor Githubs markdown files.'
              image='/images/projects/markdown.png'
              projectLink='/projects/markdown-editor'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Simon Says'
              description='A Simon Says game, inspired by the FreeCodeCamp cirriculum. Built originally with vanilla javascript, now converted to React.js using create-react-app.'
              image='/images/projects/simon.png'
              projectLink='/projects/simon'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Tic Tac Toe'
              description='Inspired by the FreeCodeCamp cirriculum, this is a fully functional tic-tac-toe game, against a variable difficulty AI.'
              image='/images/projects/tictactoe.png'
              projectLink='/projects/tic-tac-toe'
              languageIcon='/svg/language-icons/react.svg'
            />

            <ProjectCard
              name='Boilerplates'
              description='Some boilerplates created to make new projects even easier to start.'
              image='/images/projects/boilerplates.png'
              projectLink='/projects/boilerplates'
              languageIcon='/svg/language-icons/react.svg'
            />
          </div>
        </ContentSection>
      </div>
    )
  }
}
