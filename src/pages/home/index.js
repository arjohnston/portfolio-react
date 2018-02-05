import React, { Component } from 'react'
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
            <div className='portfolio-wrapper'>
              <div className='card-wrapper'>
                <div className='portfolio-card-lg'>
                  <Link to='/projects/emergency-university' className='card-cta'>
                    <img src={require('../../assets/projects/eu.png')} alt='P' />
                  </Link>
                  <div className='project-info-wrapper'>
                    <div className='project-info'>
                      <h3>Emergency University</h3>
                      <span>/projects/emergency-university</span>
                    </div>
                    <div className='project-meta'>
                      <a href='github.com'>
                        <img src={require('../../assets/github-circle.svg')} alt='Github Profile' />
                        <span>view code</span>
                      </a>
                      <Link to='/projects/emergency-university'>
                        <img src={require('../../assets/play.svg')} alt='View Project' />
                        <span>view project</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card-wrapper'>
                <div className='portfolio-card-md'>
                  <Link to='/projects/pixelated' className='card-cta'>
                    <img src={require('../../assets/projects/mario.png')} alt='Pixelated' />
                  </Link>
                  <div className='project-info-wrapper'>
                    <div className='project-info'>
                      <h3>Pixelated</h3>
                      <span>/projects/pixelated</span>
                    </div>
                    <div className='project-meta'>
                      <a href='github.com'>
                        <img src={require('../../assets/github-circle.svg')} alt='Github Profile' />
                        <span>view code</span>
                      </a>
                      <Link to='/projects/pixelated'>
                        <img src={require('../../assets/play.svg')} alt='View Project' />
                        <span>view project</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='portfolio-card-md'>
                  <Link to='/projects/tictactoe' className='card-cta'>
                    <img src={require('../../assets/projects/tictactoe.png')} alt='Tic Tac Toe' />
                  </Link>
                  <div className='project-info-wrapper'>
                    <div className='project-info'>
                      <h3>Tic Tac Toe</h3>
                      <span>/projects/tictactoe</span>
                    </div>
                    <div className='project-meta'>
                      <a href='github.com'>
                        <img src={require('../../assets/github-circle.svg')} alt='Github Profile' />
                        <span>view code</span>
                      </a>
                      <Link to='/projects/tictactoe'>
                        <img src={require('../../assets/play.svg')} alt='View Project' />
                        <span>view project</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='portfolio-card-md'>
                  <Link to='/projects/markdown' className='card-cta'>
                    <img src={require('../../assets/projects/markdown.png')} alt='Markdown Editor' />
                  </Link>
                  <div className='project-info-wrapper'>
                    <div className='project-info'>
                      <h3>Markdown Editor</h3>
                      <span>/projects/markdown</span>
                    </div>
                    <div className='project-meta'>
                      <a href='github.com'>
                        <img src={require('../../assets/github-circle.svg')} alt='Github Profile' />
                        <span>view code</span>
                      </a>
                      <Link to='/projects/markdown'>
                        <img src={require('../../assets/play.svg')} alt='View Project' />
                        <span>view project</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='portfolio-card-md'>
                  <Link to='/projects/simon' className='card-cta'>
                    <img src={require('../../assets/projects/simon.png')} alt='Simon Says' />
                  </Link>
                  <div className='project-info-wrapper'>
                    <div className='project-info'>
                      <h3>Simon Says</h3>
                      <span>/projects/simon</span>
                    </div>
                    <div className='project-meta'>
                      <a href='github.com'>
                        <img src={require('../../assets/github-circle.svg')} alt='Github Profile' />
                        <span>view code</span>
                      </a>
                      <Link to='/projects/simon'>
                        <img src={require('../../assets/play.svg')} alt='View Project' />
                        <span>view project</span>
                      </Link>
                    </div>
                  </div>
                </div>
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
              src={require('../../assets/profile-sm.png')}
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
