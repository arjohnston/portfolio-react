import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './markdown.css'
import ContentSection from '../../../components/content-section/ContentSection'
const marked = require('marked')

const placeHolder =
  'Heading\n =======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears'

export default class Markdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: placeHolder
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
        <ContentSection>
          <div className='pane-800 center'>
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
        </ContentSection>
      </div>
    )
  }
}
