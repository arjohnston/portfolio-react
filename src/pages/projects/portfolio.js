import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import ContentSection from '../../components/content-section/ContentSection'

export default class extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#393E46' }}>
        <Helmet>
          <title>Portfolio</title>
          <meta
            name='description'
            content='Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
          />
          <link rel='canonical' href='https://arjohnston.io/projects/bloc' />
        </Helmet>

        <div
          className='hero'
          style={{ backgroundImage: 'url(/images/projects/boilerplates.png)' }}
        />

        <ContentSection>
          <div className='pane-800 center'>
            <h1>Portfolio</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </ContentSection>

        <ContentSection>
          <div className='pane pane-50'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className='pane pane-50'>
            <picture>
              <source
                type='image/webp'
                srcSet='/images/projects/boilerplates.webp'
              />
              <img src='/images/projects/boilerplates.png' alt='TEMP' />
            </picture>
          </div>
        </ContentSection>

        <ContentSection>
          <div className='pane pane-50'>
            <picture>
              <source
                type='image/webp'
                srcSet='/images/projects/boilerplates.webp'
              />
              <img src='/images/projects/boilerplates.png' alt='TEMP' />
            </picture>
          </div>
          <div className='pane pane-50'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </ContentSection>

        <ContentSection>
          <div className='pane pane-50'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className='pane pane-50'>
            <picture>
              <source
                type='image/webp'
                srcSet='/images/projects/boilerplates.webp'
              />
              <img src='/images/projects/boilerplates.png' alt='TEMP' />
            </picture>
          </div>
        </ContentSection>
      </div>
    )
  }
}
