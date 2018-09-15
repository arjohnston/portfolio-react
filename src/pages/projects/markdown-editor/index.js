import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

// import ContentSection from '../../../components/content-section/ContentSection'
import './style.css'

const placeHolder =
  'Heading\n =======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears'

export default class Markdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: placeHolder,
      underConstructionMessageShown: true
    }
  }

  setText (e) {
    e.preventDefault()

    let val = document.getElementById('markdown-input').value

    this.setState({
      text: val
    })
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>Markdown Editor</title>
          <meta
            name='description'
            content='Markdown Editor is a web-based text editor that accepts input, and spits out README.md text for your github profile.'
          />
          <link
            rel='canonical'
            href='https://arjohnston.io/projects/markdown-editor'
          />
        </Helmet>
        {this.state.underConstructionMessageShown && (
          <div
            style={{
              padding: '72px 0',
              maxWidth: '600px',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3>
              This app is under construction, feel free to preview it as-is or
              view the progress in the code.
            </h3>
            <picture style={{ width: '100%' }}>
              <source type='image/webp' srcSet='/images/construction.webp' />
              <img
                style={{ width: '100%' }}
                src='/images/construction.png'
                alt='Under Construction'
              />
            </picture>
            <div
              style={{ color: 'white', cursor: 'pointer', margin: '12px auto' }}
              className='portfolio-cta'
              onClick={() =>
                this.setState({ underConstructionMessageShown: false })
              }
            >
              preview game
            </div>
            <a
              style={{ margin: '12px auto' }}
              className='portfolio-cta'
              href='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor'
              target='_blank'
              rel='noopener noreferrer'
              title='Visit my Github profile'
            >
              view code
            </a>
          </div>
        )}
        {!this.state.underConstructionMessageShown && (
          <div className='app-wrapper'>
            {/* <ContentSection> */}
            <div>
              <h3>Markdown Editor</h3>
              <div className='markdown-wrapper'>
                <p>Enter your markdown below:</p>
                <textarea
                  id='markdown-input'
                  defaultValue={this.state.text}
                  onKeyUp={this.setText.bind(this)}
                />
                <p>Output:</p>
                <div
                  className='markdown-output'
                  dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
                />
              </div>
            </div>
            <a
              className='portfolio-cta'
              href='https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor'
              target='_blank'
              rel='noopener noreferrer'
              title='Visit my Github profile'
            >
              view code
            </a>
            {/* </ContentSection> */}
          </div>
        )}
      </div>
    )
  }
}
