import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Card extends Component {
  render () {
    let classList = this.props.size ? this.props.size : ''

    return (
      <div className={`card ${classList}`}>
        <Link to={this.props.projectLink} className='card-cta'>
          <picture>
            <source
              type='image/webp'
              srcSet={this.props.image.replace(/\.[^/.]+$/, '.webp')}
            />
            <img src={this.props.image} alt={this.props.name} />
          </picture>
        </Link>
        <div className='project-info-wrapper'>
          <Link to={this.props.projectLink}>
            <div className='project-info'>
              <span>{this.props.projectLink}</span>
              <h3>{this.props.name}</h3>

              {this.props.languageIcon && (
                <img src={this.props.languageIcon} alt='Project Language' />
              )}
            </div>
          </Link>

          <div className='project-meta'>
            <a href={this.props.githubLink}>
              <img src='/svg/github-circle.svg' alt='Github Profile' />
              <span>view code</span>
            </a>
            <Link to={this.props.projectLink}>
              <img src='/svg/play.svg' alt='View Project' />
              <span>view project</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  size: 'one-by-one'
}
