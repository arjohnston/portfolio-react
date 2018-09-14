import React, { Component } from 'react'
import './card.css'

const Link = require('react-router-dom').Link

export class HomeCard extends Component {
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

HomeCard.defaultProps = {
  size: 'one-by-one'
}

export class ProjectCard extends Component {
  render () {
    return (
      <Link className='project' to={this.props.projectLink}>
        <div className='project-image-wrapper'>
          <picture>
            <source
              type='image/webp'
              srcSet={this.props.image.replace(/\.[^/.]+$/, '.webp')}
            />
            <img src={this.props.image} alt={this.props.name} />
          </picture>
        </div>
        <div className='project-content'>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>

          {this.props.languageIcon && (
            <img src={this.props.languageIcon} alt='Project Language' />
          )}
        </div>
        <div className='project-right-arrow'>
          <img src='/svg/right-arrow.svg' alt='right arrow' />
        </div>
      </Link>
    )
  }
}
