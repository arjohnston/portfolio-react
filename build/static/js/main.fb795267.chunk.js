;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    21: function(e, t, a) {},
    24: function(e, t, a) {
      e.exports = a.p + 'static/media/logo.d8da14f9.svg'
    },
    26: function(e, t) {
      e.exports = {
        gameInProgress: !1,
        gameLoopTimer: null,
        score: 0,
        movementQueue: [],
        playerSpriteJumpingState: !1,
        spaceBarHeld: !1,
        spritesWithBoxCollider: [],
        startingYJumpPosition: null,
        gameTime: 0,
        frameCounter: 0,
        menuState: 'startMenu',
        mouseShown: !0,
        playerSpriteJumping: !1,
        ableToJump: !0,
        mouseTimer: 0,
        animation: null
      }
    },
    27: function(e, t, a) {
      e.exports = a(55)
    },
    32: function(e, t, a) {},
    41: function(e, t, a) {},
    42: function(e, t, a) {},
    43: function(e, t, a) {},
    49: function(e, t, a) {},
    50: function(e, t, a) {},
    51: function(e, t, a) {},
    52: function(e, t, a) {},
    53: function(e, t, a) {},
    54: function(e, t, a) {},
    55: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        i = a.n(n),
        r = a(12),
        o = a.n(r),
        l = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        )
      function s(e) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var t = e.installing
              t.onstatechange = function() {
                'installed' === t.state &&
                  (navigator.serviceWorker.controller
                    ? console.log('New content is available; please refresh.')
                    : console.log('Content is cached for offline use.'))
              }
            }
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e)
          })
      }
      a(32)
      var c = a(1),
        m = a(2),
        u = a(4),
        p = a(3),
        d = a(5),
        g = a(8),
        h = a(9),
        v = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.location !== e.location && window.scrollTo(0, 0)
                }
              },
              {
                key: 'render',
                value: function() {
                  return this.props.children
                }
              }
            ]),
            t
          )
        })(n.Component),
        b = Object(h.e)(v),
        E = a(15),
        f = (a(41), a(24)),
        y = a.n(f),
        j = (function(e) {
          function t() {
            var e
            return (
              Object(c.a)(this, t),
              ((e = Object(u.a)(this, Object(p.a)(t).call(this))).state = {
                logoHeight: 40,
                headerBackgroundOpacity: 1
              }),
              (e.handleScroll = e.handleScroll.bind(Object(E.a)(e))),
              e
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.addEventListener('scroll', this.handleScroll),
                    this.setHeaderStyle()
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.location !== e.location && this.setHeaderStyle()
                }
              },
              {
                key: 'setHeaderStyle',
                value: function() {
                  var e = this.state.logoHeight,
                    t = this.state.headerBackgroundOpacity
                  '/' === this.props.location.pathname
                    ? ((e = 60), (t = 0))
                    : ((e = 40), (t = 1)),
                    this.setState({ logoHeight: e, headerBackgroundOpacity: t })
                }
              },
              {
                key: 'handleScroll',
                value: function() {
                  if ('/' === this.props.location.pathname) {
                    var e = window.pageYOffset,
                      t = this.state.headerBackgroundOpacity,
                      a = this.state.logoHeight
                    e > 0 && e < 200
                      ? ((t = e / 200), (a = 60 - e / 10))
                      : e < 1
                      ? ((t = 0), (a = 60))
                      : ((t = 1), (a = 40)),
                      this.setState({
                        headerBackgroundOpacity: t,
                        logoHeight: a
                      })
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = window.location.pathname.split('/'),
                    t = e.length > 2 ? e[e.length - 1] : null
                  return i.a.createElement(
                    'div',
                    {
                      className: 'header-wrapper',
                      style: {
                        backgroundColor: 'rgba(13, 115, 119, '.concat(
                          this.state.headerBackgroundOpacity,
                          ')'
                        ),
                        borderBottom: '1px solid rgba(34, 40, 49, '.concat(
                          this.state.headerBackgroundOpacity,
                          ')'
                        )
                      }
                    },
                    i.a.createElement(
                      'nav',
                      { className: 'header' },
                      i.a.createElement(
                        g.b,
                        { className: 'active', to: '/' },
                        i.a.createElement('img', {
                          src: y.a,
                          alt: 'Andrew Johnston',
                          className: 'logo',
                          style: {
                            height: ''.concat(this.state.logoHeight, 'px')
                          }
                        })
                      ),
                      i.a.createElement(
                        'ul',
                        { className: 'nav' },
                        i.a.createElement(
                          'li',
                          null,
                          i.a.createElement(
                            g.c,
                            { exact: !0, activeClassName: 'active', to: '/' },
                            'arjohnston.io'
                          )
                        ),
                        i.a.createElement('li', null, '\xa0/\xa0'),
                        i.a.createElement(
                          'li',
                          null,
                          i.a.createElement(
                            g.c,
                            {
                              exact: !0,
                              activeClassName: 'active',
                              to: '/projects'
                            },
                            'projects'
                          )
                        ),
                        i.a.createElement('li', null, '\xa0/\xa0'),
                        t
                          ? i.a.createElement(
                              'li',
                              null,
                              i.a.createElement(
                                g.c,
                                {
                                  exact: !0,
                                  activeClassName: 'active',
                                  to: '/projects/'.concat(t)
                                },
                                t
                              )
                            )
                          : ''
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        w = Object(h.e)(j),
        k = function() {
          return i.a.createElement(
            'a',
            {
              href: 'https://github.com/arjohnston',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'button button-secondary button-icon-only',
              title: 'Visit my Github profile'
            },
            i.a.createElement(
              'div',
              { className: 'button-wrapper' },
              i.a.createElement(
                'svg',
                { width: '40px', height: '40px' },
                i.a.createElement(
                  'g',
                  { transform: 'scale(0.07)' },
                  i.a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    fill: '#FFFFFF',
                    d:
                      'M289.02,10.012c-155.784,0-282.102,126.292-282.102,282.097 c0,124.636,80.828,230.377,192.915,267.682c14.094,2.608,19.276-6.125,19.276-13.575c0-6.721-0.263-28.947-0.381-52.52 c-78.482,17.066-95.047-33.283-95.047-33.283c-12.823-32.607-31.318-41.277-31.318-41.277 c-25.592-17.507,1.932-17.147,1.932-17.147c28.321,1.988,43.239,29.072,43.239,29.072c25.163,43.125,65.992,30.654,82.096,23.447 c2.528-18.229,9.838-30.678,17.91-37.721c-62.662-7.133-128.526-31.322-128.526-139.414c0-30.798,11.022-55.963,29.07-75.719 c-2.929-7.106-12.593-35.798,2.725-74.656c0,0,23.695-7.578,77.599,28.921c22.499-6.252,46.634-9.388,70.612-9.497 c23.966,0.109,48.116,3.245,70.663,9.497c53.848-36.5,77.496-28.921,77.496-28.921c15.355,38.858,5.707,67.55,2.773,74.656 c18.085,19.756,29.035,44.921,29.035,75.719c0,108.352-65.993,132.207-128.813,139.19c10.12,8.754,19.133,25.921,19.133,52.239 c0,37.743-0.324,68.121-0.324,77.413c0,7.51,5.082,16.307,19.377,13.538c112.021-37.347,192.748-143.05,192.748-267.645 C571.107,136.304,444.807,10.012,289.02,10.012z'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M113.767,415.039c-0.622,1.406-2.83,1.824-4.834,0.863c-2.057-0.925-3.196-2.835-2.539-4.239 c0.614-1.443,2.822-1.844,4.863-0.88C113.302,411.705,114.47,413.635,113.767,415.039L113.767,415.039z M110.292,412.465'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M125.192,427.786c-1.341,1.244-3.982,0.665-5.759-1.306c-1.855-1.965-2.19-4.599-0.831-5.864 c1.387-1.244,3.939-0.659,5.781,1.308C126.239,423.915,126.594,426.521,125.192,427.786L125.192,427.786z M122.498,424.898'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M136.312,444.03c-1.722,1.205-4.552,0.077-6.304-2.434c-1.724-2.508-1.724-5.516,0.043-6.723 c1.744-1.202,4.539-0.12,6.307,2.368C138.083,439.792,138.083,442.802,136.312,444.03L136.312,444.03z M136.312,444.03'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M151.549,459.728c-1.542,1.707-4.834,1.244-7.242-1.08c-2.475-2.273-3.159-5.502-1.61-7.211 c1.571-1.704,4.883-1.225,7.31,1.085C152.453,454.793,153.2,458.039,151.549,459.728L151.549,459.728z M151.549,459.728'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M172.571,468.843c-0.686,2.208-3.851,3.211-7.047,2.27c-3.192-0.964-5.282-3.551-4.633-5.783 c0.657-2.226,3.851-3.271,7.064-2.265C171.145,464.023,173.239,466.595,172.571,468.843L172.571,468.843z M172.571,468.843'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M195.664,470.529c0.072,2.326-2.64,4.259-5.987,4.298c-3.375,0.079-6.103-1.805-6.14-4.097 c0-2.348,2.644-4.256,6.022-4.315C192.906,466.352,195.664,468.223,195.664,470.529L195.664,470.529z M195.664,470.529'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M217.139,466.875c0.401,2.27-1.923,4.601-5.255,5.221c-3.275,0.603-6.304-0.804-6.725-3.052 c-0.409-2.326,1.963-4.657,5.24-5.262C213.729,463.204,216.719,464.566,217.139,466.875L217.139,466.875z M217.139,466.875'
                  })
                )
              )
            )
          )
        },
        x = function() {
          return i.a.createElement(
            'a',
            {
              href: 'https://codepen.io/arjohnston/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'button button-secondary button-icon-only',
              title: 'Take a look at my CodePen portfolio.'
            },
            i.a.createElement(
              'div',
              { className: 'button-wrapper' },
              i.a.createElement(
                'svg',
                { width: '40px', height: '40px' },
                i.a.createElement(
                  'g',
                  { transform: 'scale(0.07)' },
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points: '143.553,262.522 143.553,312.822 181.155,287.674'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points:
                      '273.332,226.014 273.332,155.92 155.583,234.413 208.182,269.598'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points:
                      '421.137,234.413 303.391,155.92 303.391,226.014 368.539,269.598'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points:
                      '155.583,340.933 273.332,419.424 273.332,349.329 208.182,305.757'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points:
                      '303.391,349.329 303.391,419.424 421.137,340.933 368.539,305.757'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points:
                      '288.358,252.121 235.208,287.674 288.358,323.225 341.512,287.674'
                  }),
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M288.358,4.865C132.173,4.865,5.556,131.48,5.556,287.674c0,156.192,126.617,282.802,282.802,282.802 c156.192,0,282.806-126.61,282.806-282.802C571.164,131.48,444.55,4.865,288.358,4.865z M463.22,340.951 c0,0.662-0.046,1.314-0.134,1.968c-0.034,0.213-0.084,0.431-0.12,0.644c-0.08,0.424-0.15,0.849-0.261,1.261 c-0.066,0.25-0.159,0.487-0.236,0.726c-0.118,0.367-0.238,0.739-0.385,1.106c-0.103,0.247-0.228,0.485-0.336,0.726 c-0.161,0.34-0.324,0.671-0.511,1.005c-0.134,0.227-0.285,0.46-0.431,0.687c-0.199,0.313-0.405,0.617-0.635,0.912 c-0.163,0.23-0.333,0.441-0.519,0.652c-0.234,0.276-0.481,0.554-0.742,0.812c-0.197,0.2-0.395,0.401-0.599,0.588 c-0.271,0.247-0.562,0.487-0.856,0.719c-0.22,0.175-0.44,0.347-0.676,0.512c-0.089,0.058-0.168,0.132-0.252,0.187L296.697,460.01 c-2.528,1.683-5.428,2.53-8.339,2.53c-2.9,0-5.809-0.848-8.337-2.53L120.189,353.453c-0.083-0.055-0.161-0.129-0.245-0.187 c-0.236-0.165-0.462-0.337-0.683-0.512c-0.292-0.231-0.578-0.472-0.848-0.719c-0.208-0.187-0.408-0.388-0.603-0.588 c-0.263-0.258-0.508-0.535-0.752-0.812c-0.17-0.211-0.347-0.422-0.51-0.652c-0.225-0.295-0.438-0.599-0.633-0.912 c-0.152-0.227-0.294-0.46-0.433-0.687c-0.184-0.334-0.347-0.665-0.508-1.005c-0.118-0.24-0.233-0.479-0.338-0.726 c-0.145-0.367-0.27-0.739-0.385-1.106c-0.084-0.238-0.166-0.476-0.233-0.726c-0.114-0.412-0.186-0.837-0.266-1.261 c-0.034-0.213-0.09-0.431-0.12-0.644c-0.086-0.653-0.138-1.306-0.138-1.968V234.393c0-0.662,0.052-1.314,0.138-1.958 c0.03-0.22,0.086-0.432,0.12-0.654c0.08-0.42,0.152-0.846,0.266-1.26c0.068-0.246,0.149-0.485,0.233-0.727 c0.116-0.367,0.24-0.733,0.385-1.094c0.104-0.247,0.22-0.496,0.338-0.735c0.161-0.34,0.324-0.672,0.508-0.995 c0.139-0.239,0.281-0.466,0.433-0.698c0.195-0.313,0.408-0.616,0.633-0.911c0.163-0.22,0.34-0.441,0.51-0.653 c0.245-0.274,0.49-0.552,0.752-0.807c0.195-0.206,0.395-0.406,0.603-0.59c0.27-0.25,0.556-0.49,0.848-0.719 c0.22-0.174,0.447-0.351,0.683-0.515c0.084-0.056,0.161-0.13,0.245-0.185l159.832-106.556c5.051-3.367,11.625-3.367,16.676,0 l159.831,106.556c0.084,0.054,0.163,0.129,0.252,0.185c0.235,0.164,0.456,0.34,0.676,0.515c0.295,0.229,0.585,0.468,0.856,0.719 c0.204,0.184,0.401,0.384,0.599,0.59c0.261,0.255,0.508,0.533,0.742,0.807c0.186,0.212,0.355,0.433,0.519,0.653 c0.229,0.295,0.436,0.598,0.635,0.911c0.146,0.232,0.297,0.459,0.431,0.698c0.187,0.323,0.35,0.655,0.511,0.995 c0.108,0.239,0.233,0.488,0.336,0.735c0.146,0.36,0.267,0.727,0.385,1.094c0.077,0.242,0.17,0.481,0.236,0.727 c0.11,0.415,0.181,0.84,0.261,1.26c0.036,0.223,0.086,0.435,0.12,0.654c0.088,0.644,0.134,1.296,0.134,1.958V340.951z'
                  }),
                  i.a.createElement('polygon', {
                    fill: '#FFFFFF',
                    points: '433.168,312.822 433.168,262.522 395.575,287.674'
                  })
                )
              )
            )
          )
        },
        N = function() {
          return i.a.createElement(
            'a',
            {
              href: 'https://www.linkedin.com/in/ajohnston3/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'button button-secondary button-icon-only',
              title: 'Find me on LinkedIn.'
            },
            i.a.createElement(
              'div',
              { className: 'button-wrapper' },
              i.a.createElement(
                'svg',
                { width: '40px', height: '40px' },
                i.a.createElement(
                  'g',
                  { transform: 'scale(0.07)' },
                  i.a.createElement('path', {
                    fill: '#FFFFFF',
                    d:
                      'M287.225,5.877C131.894,5.877,5.974,131.798,5.974,287.129c0,155.332,125.92,281.254,281.251,281.254 s281.251-125.922,281.251-281.254C568.477,131.798,442.557,5.877,287.225,5.877z M203.783,431.268H143.81V238.315h59.973V431.268z M173.807,211.941c-19.218,0-34.771-15.582-34.771-34.779c0-19.177,15.554-34.757,34.771-34.757c19.171,0,34.76,15.58,34.76,34.757 C208.567,196.359,192.979,211.941,173.807,211.941z M428.396,431.268h-59.926v-93.835c0-22.373-0.41-51.155-31.162-51.155 c-31.202,0-35.995,24.374-35.995,49.539v95.451h-59.917V238.315h57.516v26.367h0.808c8.004-15.17,27.564-31.162,56.737-31.162 c60.73,0,71.939,39.965,71.939,91.909V431.268z'
                  })
                )
              )
            )
          )
        },
        O = function() {
          return i.a.createElement(
            'div',
            { className: 'buttons' },
            i.a.createElement(k, null),
            i.a.createElement(x, null),
            i.a.createElement(N, null)
          )
        },
        S = (a(42),
        (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'footer' },
                    i.a.createElement(
                      'a',
                      { href: 'mailto:arjohnston3@gmail.com' },
                      'arjohnston3@gmail.com'
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'social' },
                      i.a.createElement(O, null)
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component)),
        M = (a(43),
        (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'layout-wrapper' },
                    i.a.createElement(w, null),
                    this.props.children,
                    i.a.createElement(S, null)
                  )
                }
              }
            ]),
            t
          )
        })(n.Component)),
        C = a(7),
        T = (a(49),
        (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.size ? this.props.size : ''
                  return i.a.createElement(
                    'div',
                    { className: 'card '.concat(e) },
                    i.a.createElement(
                      g.b,
                      { to: this.props.projectLink, className: 'card-cta' },
                      i.a.createElement(
                        'picture',
                        null,
                        i.a.createElement('source', {
                          type: 'image/webp',
                          srcSet: this.props.image.replace(
                            /\.[^\/.]+$/,
                            '.webp'
                          )
                        }),
                        i.a.createElement('img', {
                          src: this.props.image,
                          alt: this.props.name
                        })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'project-info-wrapper' },
                      i.a.createElement(
                        g.b,
                        { to: this.props.projectLink },
                        i.a.createElement(
                          'div',
                          { className: 'project-info' },
                          i.a.createElement(
                            'span',
                            null,
                            this.props.projectLink
                          ),
                          i.a.createElement('h3', null, this.props.name),
                          this.props.languageIcon &&
                            i.a.createElement('img', {
                              src: this.props.languageIcon,
                              alt: 'Project Language'
                            })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'project-meta' },
                        i.a.createElement(
                          'a',
                          { href: this.props.githubLink },
                          i.a.createElement('img', {
                            src: '/svg/github-circle.svg',
                            alt: 'Github Profile'
                          }),
                          i.a.createElement('span', null, 'view code')
                        ),
                        i.a.createElement(
                          g.b,
                          { to: this.props.projectLink },
                          i.a.createElement('img', {
                            src: '/svg/play.svg',
                            alt: 'View Project'
                          }),
                          i.a.createElement('span', null, 'view project')
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component))
      T.defaultProps = { size: 'one-by-one' }
      a(50)
      var L = ['web developer.', 'creator.', 'designer.'],
        F = (function(e) {
          function t() {
            var e
            return (
              Object(c.a)(this, t),
              ((e = Object(u.a)(this, Object(p.a)(t).call(this))).state = {
                heroTextIndex: null,
                heroTextStyle: null,
                textAnimationTimer: null,
                pageLoaded: !1
              }),
              e
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.startTextAnimationTimer()
                }
              },
              {
                key: 'startTextAnimationTimer',
                value: function() {
                  var e = this
                  setTimeout(this.openText.bind(this), 1e3),
                    setTimeout(function() {
                      e.setState({ pageLoaded: !0 })
                    }, 50)
                }
              },
              {
                key: 'openText',
                value: function() {
                  var e = this,
                    t = function() {
                      e.setState(
                        { animating: !1, heroTextStyle: { maxWidth: '100%' } },
                        function() {
                          e.closeText()
                        }
                      ),
                        delete e.openTextAnimation
                    }
                  this.setState(
                    {
                      animating: !0,
                      heroTextIndex:
                        this.state.heroTextIndex >= L.length - 1 ||
                        null === this.state.heroTextIndex
                          ? 0
                          : this.state.heroTextIndex + 1
                    },
                    function() {
                      e.setState({
                        heroTextStyle: {
                          maxWidth: '100%',
                          transition: 'max-width '.concat(1500, 'ms steps(30)')
                        }
                      })
                      e.openTextAnimation = setTimeout(t, 2500)
                    }
                  )
                }
              },
              {
                key: 'closeText',
                value: function() {
                  var e = this,
                    t = function() {
                      e.setState(
                        { animating: !1, heroTextStyle: null },
                        function() {
                          e.openText()
                        }
                      ),
                        delete e.closeTextAnimation
                    }
                  this.setState({ animating: !0 }, function() {
                    e.setState({
                      heroTextStyle: {
                        maxWidth: '0px',
                        transition: 'max-width '.concat(1500, 'ms steps(30)')
                      }
                    })
                    e.closeTextAnimation = setTimeout(t, 1600)
                  })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e =
                    null === this.state.heroTextIndex
                      ? 0
                      : this.state.heroTextIndex
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'andrew johnston'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/'
                      })
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'home-wrapper' },
                      i.a.createElement(
                        'section',
                        {
                          className: 'home-hero'.concat(
                            this.state.pageLoaded ? ' active' : ''
                          )
                        },
                        i.a.createElement(
                          'div',
                          { className: 'hero-wrapper' },
                          i.a.createElement('h1', null, 'andrew johnston'),
                          i.a.createElement(
                            'span',
                            { style: this.state.heroTextStyle },
                            L[e]
                          )
                        )
                      ),
                      i.a.createElement(
                        'section',
                        {
                          className: 'portfolio'.concat(
                            this.state.pageLoaded ? ' active' : ''
                          )
                        },
                        i.a.createElement(
                          'div',
                          { className: 'grid' },
                          i.a.createElement(
                            'h1',
                            {
                              style: { marginBottom: '60px', fontWeight: '200' }
                            },
                            'notable projects'
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'grid-row' },
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-40' },
                              i.a.createElement(T, {
                                size: 'four-by-four',
                                name: 'Custom Dashboard',
                                projectLink: '/projects/dashboard',
                                image: '/images/projects/dashboard.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/eu-cms'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-20' },
                              i.a.createElement(T, {
                                size: 'two-by-one',
                                name: 'Boilerplates',
                                projectLink: '/projects/boilerplates',
                                image: '/images/projects/boilerplates.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/boilerplates'
                              }),
                              i.a.createElement(T, {
                                size: 'two-by-one',
                                name: 'Simon Says',
                                projectLink: '/projects/simon',
                                image: '/images/projects/simon.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/simon'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-40' },
                              i.a.createElement(T, {
                                size: 'four-by-four',
                                name: 'Emergency University',
                                projectLink: '/projects/emergency-university',
                                image: '/images/projects/eu.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/eu-react'
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'grid-row' },
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-20' },
                              i.a.createElement(T, {
                                size: 'two-by-one',
                                name: 'Markdown Editor',
                                projectLink: '/projects/markdown-editor',
                                image: '/images/projects/markdown.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-40' },
                              i.a.createElement(T, {
                                size: 'two-by-one',
                                name: 'www.massnotification.com',
                                projectLink: '/projects/mass-notification',
                                image: '/images/projects/mass-notification.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink: '#'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'grid-section width-40' },
                              i.a.createElement(T, {
                                size: 'two-by-one',
                                name: 'Pixelated',
                                projectLink: '/projects/pixelated',
                                image: '/images/projects/mario.png',
                                languageIcon: '/svg/language-icons/react.svg',
                                githubLink:
                                  'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/pixelated'
                              })
                            )
                          )
                        ),
                        i.a.createElement(
                          g.b,
                          { className: 'portfolio-cta', to: '/projects/' },
                          'view all projects'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'profile-image' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/profile-sm.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/profile-sm.png',
                            alt: 'Andrew Johnston'
                          })
                        )
                      ),
                      i.a.createElement(
                        'section',
                        {
                          className: 'about'.concat(
                            this.state.pageLoaded ? ' active' : ''
                          )
                        },
                        i.a.createElement(
                          'div',
                          { className: 'about-wrapper' },
                          i.a.createElement(
                            'p',
                            null,
                            'Andrew is a professional front end web developer, with full stack experience. He works daily in a collaborive environment to make life-saving tools for people.'
                          ),
                          i.a.createElement(
                            'p',
                            null,
                            "In his spare time, Andrew attends skill-developent programs, creates side-projects and explores new technologies. When he's not coding, you can find him with family and a craft brew in hand."
                          ),
                          i.a.createElement(
                            'p',
                            null,
                            'Andrew is furthering his education with back-end development and is motivated towards specializing in Machine Learning.'
                          )
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        q = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { paddingTop: '48px' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'projects'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects'
                      })
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'grid', style: { margin: '72px 0' } },
                      i.a.createElement(
                        'div',
                        { className: 'grid-row' },
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-40' },
                          i.a.createElement(T, {
                            size: 'four-by-four',
                            name: 'Custom Dashboard',
                            projectLink: '/projects/dashboard',
                            image: '/images/projects/dashboard.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink: 'https://github.com/arjohnston/eu-cms'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-20' },
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Boilerplates',
                            projectLink: '/projects/boilerplates',
                            image: '/images/projects/boilerplates.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/boilerplates'
                          }),
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Simon Says',
                            projectLink: '/projects/simon',
                            image: '/images/projects/simon.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/simon'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-40' },
                          i.a.createElement(T, {
                            size: 'four-by-four',
                            name: 'Emergency University',
                            projectLink: '/projects/emergency-university',
                            image: '/images/projects/eu.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink: 'https://github.com/arjohnston/eu-react'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'grid-row' },
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-20' },
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Markdown Editor',
                            projectLink: '/projects/markdown-editor',
                            image: '/images/projects/markdown.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor'
                          }),
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Tic Tac Toe',
                            projectLink: '/projects/tic-tac-toe',
                            image: '/images/projects/tictactoe.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/tic-tac-toe'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-40' },
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'www.massnotification.com',
                            projectLink: '/projects/mass-notification',
                            image: '/images/projects/mass-notification.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink: '#'
                          }),
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Bloc',
                            projectLink: '/projects/bloc',
                            image: '/images/projects/bloc.png',
                            languageIcon: '/svg/language-icons/swift.svg',
                            githubLink: 'https://github.com/arjohnston/Bloc'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-40' },
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Pixelated',
                            projectLink: '/projects/pixelated',
                            image: '/images/projects/mario.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/pixelated'
                          }),
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'Directions',
                            projectLink: '/projects/directions',
                            image: '/images/projects/directions.png',
                            languageIcon: '/svg/language-icons/swift.svg',
                            githubLink:
                              'https://github.com/arjohnston/Directions'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'grid-row' },
                        i.a.createElement(
                          'div',
                          { className: 'grid-section width-40' },
                          i.a.createElement(T, {
                            size: 'two-by-one',
                            name: 'portfolio',
                            projectLink: '/projects/portfolio',
                            image: '/images/projects/portfolio.png',
                            languageIcon: '/svg/language-icons/react.svg',
                            githubLink:
                              'https://github.com/arjohnston/portfolio-react'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        I = a(6),
        A = (a(51),
        (function(e) {
          function t(e) {
            var a
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(this, Object(p.a)(t).call(this, e))).state = {
                selected: null,
                opponent: null,
                result: '',
                playerTurn: !1,
                board: [['', '', ''], ['', '', ''], ['', '', '']],
                moveCounter: 0,
                minMaxTurnCount: 0,
                underConstructionMessageShown: !0
              }),
              a
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'selection',
                value: function(e) {
                  var t = this
                  this.setState(
                    {
                      selected: e,
                      opponent: 'X' === e ? 'O' : 'X',
                      playerTurn: 'X' === e
                    },
                    function() {
                      t.state.playerTurn || t.AI()
                    }
                  )
                }
              },
              {
                key: 'minimax',
                value: function(e, t) {
                  var a = -10,
                    n = 0,
                    i = this.getAvailableMoves(e),
                    r = 'X' === this.state.selected ? 'O' : 'X',
                    o = this.state.selected
                  if (
                    this.state.minMaxTurnCount <= 0 ||
                    this.checkWinCondition() ||
                    !i
                  )
                    return this.evaluate(e)
                  if (t === r) {
                    for (var l in ((a = -10), i)) {
                      var s = [
                        Object(I.a)(e[0]),
                        Object(I.a)(e[1]),
                        Object(I.a)(e[2])
                      ]
                      this.makeMove(s, r, i[l]),
                        (n = this.minimax(s, o)) > a && (a = n)
                    }
                    return a
                  }
                  if (t === o) {
                    for (var c in ((a = 10), i)) {
                      var m = [
                        Object(I.a)(e[0]),
                        Object(I.a)(e[1]),
                        Object(I.a)(e[2])
                      ]
                      this.makeMove(m, o, i[c]),
                        (n = this.minimax(m, r)) < a && (a = n)
                    }
                    return a
                  }
                }
              },
              {
                key: 'makeMove',
                value: function(e, t, a) {
                  var n = parseInt(a[0], 10),
                    i = parseInt(a[1], 10)
                  return (
                    (e[n][i] = t),
                    this.setState(function(e) {
                      return { minMaxTurnCount: e.turnCount++ }
                    }),
                    e
                  )
                }
              },
              {
                key: 'getAvailableMoves',
                value: function(e) {
                  var t = []
                  for (var a in e)
                    for (var n in e[a]) '' === e[a][n] && t.push([a, n])
                  return t
                }
              },
              {
                key: 'getBestMove',
                value: function() {
                  var e,
                    t = [
                      Object(I.a)(this.state.board[0]),
                      Object(I.a)(this.state.board[1]),
                      Object(I.a)(this.state.board[2])
                    ],
                    a = -10,
                    n = null,
                    i = this.getAvailableMoves(t),
                    r = this.state.minMaxTurnCount,
                    o = 'X' === this.state.selected ? 'O' : 'X',
                    l = this.state.selected,
                    s = [
                      Object(I.a)(t[0]),
                      Object(I.a)(t[1]),
                      Object(I.a)(t[2])
                    ]
                  if ((console.log('called getBestMove'), 0 === r))
                    return [1, 1]
                  if (1 === r && '' === t[1][1]) return [1, 1]
                  if (1 === r)
                    return [[0, 0], [0, 2], [2, 0], [2, 2]][
                      Math.floor(4 * Math.random())
                    ]
                  for (var c in (console.log(
                    'proceeding to for loop, getBestMove'
                  ),
                  i))
                    (s = this.makeMove(s, o, i[c])),
                      (e = this.minimax(s, l)),
                      console.log(s),
                      console.log('currScore: ', e),
                      console.log('bestScore: ', a),
                      e > a && ((a = e), (n = i[c]))
                  return console.log('bestMove: ', n), n
                }
              },
              {
                key: 'evaluate',
                value: function(e) {
                  var t = 0
                  return (
                    (t += this.evaluateLine(e, 0, 0, 0, 1, 0, 2)),
                    (t += this.evaluateLine(e, 1, 0, 1, 1, 1, 2)),
                    (t += this.evaluateLine(e, 2, 0, 2, 1, 2, 2)),
                    (t += this.evaluateLine(e, 0, 0, 1, 0, 2, 0)),
                    (t += this.evaluateLine(e, 0, 1, 1, 1, 2, 1)),
                    (t += this.evaluateLine(e, 0, 2, 1, 2, 2, 2)),
                    (t += this.evaluateLine(e, 0, 0, 1, 1, 2, 2)),
                    (t += this.evaluateLine(e, 0, 2, 1, 1, 2, 0))
                  )
                }
              },
              {
                key: 'evaluateLine',
                value: function(e, t, a, n, i, r, o) {
                  var l = 0,
                    s = 'X' === this.state.selected ? 'O' : 'X',
                    c = this.state.selected
                  if (
                    (e.gamestate[t][a] === s
                      ? (l = 1)
                      : e.gamestate[t][a] === c && (l = -1),
                    e.gamestate[n][i] === s)
                  )
                    if (1 === l) l = 10
                    else {
                      if (-1 === l) return 0
                      l = 1
                    }
                  else if (e.gamestate[n][i] === c)
                    if (-1 === l) l = -10
                    else {
                      if (1 === l) return 0
                      l = -1
                    }
                  if (e.gamestate[r][o] === s)
                    if (l > 1) l *= 10
                    else {
                      if (l < 0) return 0
                      l = 1
                    }
                  else if (e.gamestate[r][o] === c)
                    if (l < 0) l *= 10
                    else {
                      if (l > 1) return 0
                      l = -1
                    }
                  return l
                }
              },
              {
                key: 'AI',
                value: function() {
                  var e,
                    t = this,
                    a = 'X' === this.state.selected ? 'O' : 'X',
                    n = [
                      Object(I.a)(this.state.board[0]),
                      Object(I.a)(this.state.board[1]),
                      Object(I.a)(this.state.board[2])
                    ]
                  this.setState(
                    { minMaxTurnCount: this.state.moveCounter },
                    function() {
                      e = t.getBestMove()
                      try {
                        console.log('move: ', e),
                          (n[parseInt(e[0], 10)][parseInt(e[1], 10)] = a)
                      } catch (i) {
                        console.log(i)
                      }
                      t.setState({ board: n, playerTurn: !0 }, function() {
                        return t.checkWinCondition()
                      })
                    }
                  )
                }
              },
              {
                key: 'handleClick',
                value: function(e) {
                  var t = this
                  if (this.state.playerTurn) {
                    var a = Object(I.a)(this.state.board),
                      n = parseInt(e.target.id[0], 10),
                      i = parseInt(e.target.id[1], 10),
                      r = this.state.moveCounter
                    isNaN(n) ||
                      isNaN(i) ||
                      ('' === a[n][i] &&
                        ((a[n][i] = this.state.selected), r++)),
                      this.setState(
                        { board: a, playerTurn: !1, moveCounter: r },
                        function() {
                          return t.checkWinCondition()
                        }
                      )
                  }
                }
              },
              {
                key: 'resetGame',
                value: function(e) {
                  var t = this,
                    a = function() {
                      t.setState(
                        {
                          result: '',
                          board: [['', '', ''], ['', '', ''], ['', '', '']],
                          moveCounter: 0,
                          playerTurn: 'X' === t.state.selected
                        },
                        function() {
                          t.state.playerTurn || t.AI()
                        }
                      ),
                        delete t.gameEndCallback
                    }
                  this.setState({ result: e.winner }, function() {
                    t.gameEndCallback = setTimeout(a, 2e3)
                  })
                }
              },
              {
                key: 'checkWinCondition',
                value: function() {
                  var e = Object(I.a)(this.state.board),
                    t = null
                  if (
                    '' !== e[1][1] &&
                    ((e[0][0] === e[1][1] && e[2][2] === e[1][1]) ||
                      (e[0][2] === e[1][1] && e[2][0] === e[1][1]))
                  )
                    t = e[1][1]
                  else {
                    for (var a in e)
                      '' !== e[a][0] &&
                        e[a][0] === e[a][1] &&
                        e[a][2] === e[a][1] &&
                        (t = e[a][0])
                    for (var n in e)
                      '' !== e[0][n] &&
                        e[0][n] === e[1][n] &&
                        e[1][n] === e[2][n] &&
                        (t = e[0][n])
                  }
                  t
                    ? t === this.state.selected
                      ? this.resetGame({ winner: 'You won the game!' })
                      : this.resetGame({ winner: 'The computer won the game!' })
                    : this.state.moveCounter >= 9 && !t
                    ? this.resetGame({ winner: 'The game was a draw!' })
                    : this.state.playerTurn || this.AI()
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Tic Tac Toe'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'A classic that anyone can play. This Tic Tac Toe game is made with React.js.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/tic-tac-toe'
                      })
                    ),
                    this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        {
                          style: {
                            padding: '72px 0',
                            maxWidth: '600px',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                          }
                        },
                        i.a.createElement(
                          'h3',
                          null,
                          'This app is under construction, feel free to preview it as-is or view the progress in the code.'
                        ),
                        i.a.createElement(
                          'picture',
                          { style: { width: '100%' } },
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/construction.webp'
                          }),
                          i.a.createElement('img', {
                            style: { width: '100%' },
                            src: '/images/construction.png',
                            alt: 'Under Construction'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            style: {
                              color: 'white',
                              cursor: 'pointer',
                              margin: '12px auto'
                            },
                            className: 'portfolio-cta',
                            onClick: function() {
                              return e.setState({
                                underConstructionMessageShown: !1
                              })
                            }
                          },
                          'preview game'
                        ),
                        i.a.createElement(
                          'a',
                          {
                            style: { margin: '12px auto' },
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/tic-tac-toe',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      ),
                    !this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        { className: 'app-wrapper' },
                        i.a.createElement(
                          'div',
                          null,
                          i.a.createElement('h3', null, 'Tic-Tac-Toe'),
                          i.a.createElement(
                            'div',
                            { className: 'selection' },
                            'Play as:',
                            i.a.createElement(
                              'button',
                              {
                                onClick: this.selection.bind(this, 'X'),
                                className: '\n                  '
                                  .concat(
                                    null === this.state.selected ? 'hover' : '',
                                    ' '
                                  )
                                  .concat(
                                    'X' === this.state.selected
                                      ? 'selected'
                                      : '',
                                    '\n                  '
                                  ),
                                disabled: this.state.selected
                              },
                              'X'
                            ),
                            i.a.createElement(
                              'button',
                              {
                                onClick: this.selection.bind(this, 'O'),
                                className: '\n                  '
                                  .concat(
                                    null === this.state.selected ? 'hover' : '',
                                    ' '
                                  )
                                  .concat(
                                    'O' === this.state.selected
                                      ? 'selected'
                                      : '',
                                    '\n                  '
                                  ),
                                disabled: this.state.selected
                              },
                              'O'
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'result' },
                            this.state.result
                          ),
                          i.a.createElement(
                            'table',
                            {
                              className: 'tic-tac-toe-gameboard'.concat(
                                this.state.selected ? ' active' : ''
                              ),
                              onClick: this.handleClick.bind(this)
                            },
                            i.a.createElement(
                              'tbody',
                              null,
                              i.a.createElement(
                                'tr',
                                null,
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '00',
                                    className:
                                      '' !== this.state.board[0][0]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[0][0]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '01',
                                    className:
                                      '' !== this.state.board[0][1]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[0][1]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '02',
                                    className:
                                      '' !== this.state.board[0][2]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[0][2]
                                )
                              ),
                              i.a.createElement(
                                'tr',
                                null,
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '10',
                                    className:
                                      '' !== this.state.board[1][0]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[1][0]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '11',
                                    className:
                                      '' !== this.state.board[1][1]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[1][1]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '12',
                                    className:
                                      '' !== this.state.board[1][2]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[1][2]
                                )
                              ),
                              i.a.createElement(
                                'tr',
                                null,
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '20',
                                    className:
                                      '' !== this.state.board[2][0]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[2][0]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '21',
                                    className:
                                      '' !== this.state.board[2][1]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[2][1]
                                ),
                                i.a.createElement(
                                  'td',
                                  {
                                    id: '22',
                                    className:
                                      '' !== this.state.board[2][2]
                                        ? 'selected'
                                        : ''
                                  },
                                  this.state.board[2][2]
                                )
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          'a',
                          {
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/tic-tac-toe',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component)),
        P = (a(21),
        (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return i.a.createElement(function() {
                    return i.a.createElement(
                      'div',
                      {
                        className: 'simon-settings-menu '.concat(
                          e.props.menuOpen ? 'is-open' : ''
                        )
                      },
                      i.a.createElement(
                        'div',
                        { className: 'settings-menu-option' },
                        i.a.createElement('span', null, 'Difficulty'),
                        i.a.createElement(
                          'div',
                          { className: 'settings-menu-selection-wrapper' },
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection simon-easy '.concat(
                                1 === e.props.difficulty
                                  ? 'setting-selected'
                                  : ''
                              ),
                              onClick: function() {
                                return e.props.setDifficulty(1)
                              }
                            },
                            'SLOW'
                          ),
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection simon-medium '.concat(
                                2 === e.props.difficulty
                                  ? 'setting-selected'
                                  : ''
                              ),
                              onClick: function() {
                                return e.props.setDifficulty(2)
                              }
                            },
                            'NORMAL'
                          ),
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection simon-hard '.concat(
                                3 === e.props.difficulty
                                  ? 'setting-selected'
                                  : ''
                              ),
                              onClick: function() {
                                return e.props.setDifficulty(3)
                              }
                            },
                            'FAST'
                          )
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'settings-menu-option' },
                        i.a.createElement('span', null, 'Strict Mode'),
                        i.a.createElement(
                          'div',
                          { className: 'settings-menu-selection-wrapper' },
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection settings-menu-selection-highlight '.concat(
                                e.props.strictMode ? 'setting-selected' : ''
                              ),
                              onClick: e.props.toggleStrictMode
                            },
                            'ON'
                          ),
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection '.concat(
                                e.props.strictMode ? '' : 'setting-selected'
                              ),
                              onClick: e.props.toggleStrictMode
                            },
                            'OFF'
                          )
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'settings-menu-option' },
                        i.a.createElement('span', null, 'Sound'),
                        i.a.createElement(
                          'div',
                          { className: 'settings-menu-selection-wrapper' },
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection settings-menu-selection-highlight '.concat(
                                e.props.sound ? 'setting-selected' : ''
                              ),
                              onClick: e.props.toggleSound
                            },
                            'ON'
                          ),
                          i.a.createElement(
                            'span',
                            {
                              className: 'settings-menu-selection '.concat(
                                e.props.sound ? '' : 'setting-selected'
                              ),
                              onClick: e.props.toggleSound
                            },
                            'OFF'
                          )
                        )
                      ),
                      i.a.createElement(
                        'div',
                        {
                          className: 'settings-button close',
                          onClick: e.props.toggleMenu
                        },
                        'Return to Game'
                      )
                    )
                  }, null)
                }
              }
            ]),
            t
          )
        })(n.Component)),
        D = (function(e) {
          function t(e) {
            var a
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(this, Object(p.a)(t).call(this, e))).state = {
                settingsMenuOpen: !1,
                gameDifficulty: 2,
                intervalSpeed: 200,
                gamePieceActiveSpeed: 200,
                strictMode: !1,
                sound: !0,
                gameInProgress: !1,
                boardSpaceActive: null,
                arrayOfMoves: [],
                playerArrayOfMoves: [],
                winCondition: 20,
                underConstructionMessageShown: !0
              }),
              a
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'setDifficulty',
                value: function(e) {
                  var t, a, n
                  if (e < 1 || e > 3)
                    throw new Error('Invalid difficulty setting')
                  ;(n = a = 200 * (t = e)),
                    this.setState({
                      gameDifficulty: t,
                      difficultySpeed: a,
                      gamePieceActiveSpeed: n
                    })
                }
              },
              {
                key: 'toggleStrictMode',
                value: function() {
                  this.setState({ strictMode: !this.state.strictMode })
                }
              },
              {
                key: 'toggleSound',
                value: function() {
                  this.setState({ sound: !this.state.sound })
                }
              },
              {
                key: 'toggleMenu',
                value: function() {
                  this.setState({
                    settingsMenuOpen: !this.state.settingsMenuOpen,
                    gameInProgress: !1
                  })
                }
              },
              {
                key: 'toggleStart',
                value: function() {
                  this.setState({
                    gameInProgress: !this.state.gameInProgress,
                    arrayOfMoves: []
                  })
                }
              },
              {
                key: 'resetGame',
                value: function() {
                  this.setState({ gameInProgress: !0, arrayOfMoves: [] })
                }
              },
              {
                key: 'toggleGameboardPiece',
                value: function(e) {
                  var t,
                    a = this
                  this.state.gameInProgress &&
                    ((t = function() {
                      a.setState({ boardSpaceActive: null }),
                        delete a.animationEndCallback
                    }),
                    this.setState({ boardSpaceActive: e }, function() {
                      this.animationEndCallback = setTimeout(
                        t,
                        this.state.gamePieceActiveSpeed
                      )
                    }))
                }
              },
              {
                key: 'simonAI',
                value: function() {
                  var e = 0,
                    t = Math.floor(4 * Math.random() + 1)
                  this.state.arrayOfMoves.push(t)
                  var a = setInterval(function() {
                    this.toggleGameboardPiece(this.state.arrayOfMoves[e]),
                      ++e === this.state.arrayOfMoves.length && clearInterval(a)
                  }, this.state.intervalSpeed)
                  e === this.state.winCondition && console.log('won!')
                }
              },
              {
                key: 'playerMove',
                value: function(e) {
                  var t = Object(I.a)(this.state.arrayOfMoves),
                    a = Object(I.a)(this.state.playerArrayOfMoves)
                  t.length,
                    a.length,
                    a.push(e),
                    e === t[a.length - 1]
                      ? console.log('continue: ', t)
                      : this.state.strictMode && this.resetGame(),
                    this.setState({ playerArrayOfMoves: a })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return i.a.createElement(
                    'div',
                    null,
                    this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        {
                          style: {
                            padding: '72px 0',
                            maxWidth: '600px',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                          }
                        },
                        i.a.createElement(
                          'h3',
                          null,
                          'This app is under construction, feel free to preview it as-is or view the progress in the code.'
                        ),
                        i.a.createElement(
                          'picture',
                          { style: { width: '100%' } },
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/construction.webp'
                          }),
                          i.a.createElement('img', {
                            style: { width: '100%' },
                            src: '/images/construction.png',
                            alt: 'Under Construction'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            style: {
                              color: 'white',
                              cursor: 'pointer',
                              margin: '12px auto'
                            },
                            className: 'portfolio-cta',
                            onClick: function() {
                              return e.setState({
                                underConstructionMessageShown: !1
                              })
                            }
                          },
                          'preview game'
                        ),
                        i.a.createElement(
                          'a',
                          {
                            style: { margin: '12px auto' },
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/simon',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      ),
                    !this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        { className: 'app-wrapper' },
                        i.a.createElement(
                          'div',
                          null,
                          i.a.createElement(
                            'h3',
                            { className: 'game-title' },
                            'simon says'
                          ),
                          i.a.createElement(function() {
                            return i.a.createElement(
                              'div',
                              {
                                className: 'simon-game '.concat(
                                  e.state.settingsMenuOpen ? '' : 'is-open'
                                )
                              },
                              i.a.createElement(
                                C.Helmet,
                                null,
                                i.a.createElement('title', null, 'Simon Says'),
                                i.a.createElement('meta', {
                                  name: 'description',
                                  content:
                                    'A web-based recreation of the symbolic game, Simon Says.'
                                }),
                                i.a.createElement('link', {
                                  rel: 'canonical',
                                  href: 'https://arjohnston.io/projects/simon'
                                })
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  className: 'settings-button',
                                  onClick: e.toggleMenu.bind(e)
                                },
                                'Settings'
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  className: 'settings-button',
                                  onClick: e.toggleStart.bind(e)
                                },
                                e.state.gameInProgress ? 'Reset' : 'Start'
                              ),
                              i.a.createElement(
                                'div',
                                null,
                                i.a.createElement(
                                  'svg',
                                  { className: 'simon-gameboard-wrapper' },
                                  i.a.createElement('path', {
                                    onClick: e.playerMove.bind(e, 1),
                                    className: 'simon-gameboard-top-left '.concat(
                                      1 === e.state.boardSpaceActive
                                        ? 'simon-boardpiece-active'
                                        : ''
                                    ),
                                    d:
                                      'M0.6,156.1h99.3c1.9-30.5,26.3-54.9,56.8-56.8V0C71.4,2,2.6,70.8,0.6,156.1z'
                                  }),
                                  i.a.createElement('path', {
                                    onClick: e.playerMove.bind(e, 2),
                                    className: 'simon-gameboard-top-right '.concat(
                                      2 === e.state.boardSpaceActive
                                        ? 'simon-boardpiece-active'
                                        : ''
                                    ),
                                    d:
                                      'M221,156.1h99.3C318.4,70.8,249.6,2,164.3,0v99.3C194.8,101.2,219.2,125.6,221,156.1z'
                                  }),
                                  i.a.createElement('path', {
                                    onClick: e.playerMove.bind(e, 3),
                                    className: 'simon-gameboard-bottom-left '.concat(
                                      3 === e.state.boardSpaceActive
                                        ? 'simon-boardpiece-active'
                                        : ''
                                    ),
                                    d:
                                      'M99.9,163.7H0.6c2,85.3,70.8,154.1,156.1,156v-99.3C126.2,218.5,101.8,194.2,99.9,163.7z'
                                  }),
                                  i.a.createElement('path', {
                                    onClick: e.playerMove.bind(e, 4),
                                    className: 'simon-gameboard-bottom-right '.concat(
                                      4 === e.state.boardSpaceActive
                                        ? 'simon-boardpiece-active'
                                        : ''
                                    ),
                                    d:
                                      'M164.3,220.4v99.3c85.3-2,154.1-70.7,156.1-156H221C219.2,194.2,194.8,218.5,164.3,220.4z'
                                  }),
                                  i.a.createElement('circle', {
                                    className: 'simon-gameboard-center-circle',
                                    cx: '160.6',
                                    cy: '159.7',
                                    r: '54.8'
                                  })
                                ),
                                i.a.createElement(
                                  'span',
                                  { className: 'simon-scoreboard' },
                                  e.state.gameInProgress
                                    ? e.state.arrayOfMoves.length
                                    : '- -'
                                )
                              )
                            )
                          }, null),
                          i.a.createElement(P, {
                            menuOpen: this.state.settingsMenuOpen,
                            toggleMenu: this.toggleMenu.bind(this),
                            toggleSound: this.toggleSound.bind(this),
                            toggleStrictMode: this.toggleStrictMode.bind(this),
                            setDifficulty: this.setDifficulty.bind(this),
                            difficulty: this.state.gameDifficulty,
                            strictMode: this.state.strictMode,
                            sound: this.state.sound
                          })
                        ),
                        i.a.createElement(
                          'a',
                          {
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/simon',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        z = a(25),
        B = a.n(z),
        G = (a(52),
        'Heading\n =======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears'),
        H = (function(e) {
          function t(e) {
            var a
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(this, Object(p.a)(t).call(this, e))).state = {
                text: G,
                underConstructionMessageShown: !0
              }),
              a
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'setText',
                value: function(e) {
                  e.preventDefault()
                  var t = document.getElementById('markdown-input').value
                  this.setState({ text: t })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Markdown Editor'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Markdown Editor is a web-based text editor that accepts input, and spits out README.md text for your github profile.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/markdown-editor'
                      })
                    ),
                    this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        {
                          style: {
                            padding: '72px 0',
                            maxWidth: '600px',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                          }
                        },
                        i.a.createElement(
                          'h3',
                          null,
                          'This app is under construction, feel free to preview it as-is or view the progress in the code.'
                        ),
                        i.a.createElement(
                          'picture',
                          { style: { width: '100%' } },
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/construction.webp'
                          }),
                          i.a.createElement('img', {
                            style: { width: '100%' },
                            src: '/images/construction.png',
                            alt: 'Under Construction'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            style: {
                              color: 'white',
                              cursor: 'pointer',
                              margin: '12px auto'
                            },
                            className: 'portfolio-cta',
                            onClick: function() {
                              return e.setState({
                                underConstructionMessageShown: !1
                              })
                            }
                          },
                          'preview game'
                        ),
                        i.a.createElement(
                          'a',
                          {
                            style: { margin: '12px auto' },
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      ),
                    !this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        { className: 'app-wrapper' },
                        i.a.createElement(
                          'div',
                          null,
                          i.a.createElement('h3', null, 'Markdown Editor'),
                          i.a.createElement(
                            'div',
                            { className: 'markdown-wrapper' },
                            i.a.createElement(
                              'p',
                              null,
                              'Enter your markdown below:'
                            ),
                            i.a.createElement('textarea', {
                              id: 'markdown-input',
                              defaultValue: this.state.text,
                              onKeyUp: this.setText.bind(this)
                            }),
                            i.a.createElement('p', null, 'Output:'),
                            i.a.createElement('div', {
                              className: 'markdown-output',
                              dangerouslySetInnerHTML: {
                                __html: B()(this.state.text)
                              }
                            })
                          )
                        ),
                        i.a.createElement(
                          'a',
                          {
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/markdown-editor',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        U = a(26),
        J = a.n(U),
        W = { SPACE_BAR: 32, LEFT_ARROW: 37, RIGHT_ARROW: 39 },
        R = 38,
        _ = 40,
        V = 1e4,
        X = 1e3,
        Q = 'player-sprite',
        Y = 'enemy-1-sprite',
        $ = 5,
        K = 4
      function Z(e) {
        return o.a
          .findDOMNode(document.getElementById(e))
          .getBoundingClientRect().width
      }
      function ee(e) {
        return o.a
          .findDOMNode(document.getElementById(e))
          .getBoundingClientRect().height
      }
      function te(e) {
        return o.a.findDOMNode(document.getElementById(e)).style
      }
      function ae(e, t) {
        var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : null,
          r = te(t),
          o = parseInt(r.left, 10),
          l = o + Z(t),
          s = parseInt(r.top, 10),
          c = s + ee(t)
        if (
          (a && (l = (o = a) + Z(t)), n && (c = (s = n) + ee(t)), null !== i)
        ) {
          var m = te(i),
            u = parseInt(m.left, 10),
            p = u + Z(i),
            d = parseInt(m.top, 10),
            g = d + ee(i)
          return l >= u - 1 && p - (p - u) - 1 >= o && s <= g - 2 && d + 2 <= c
            ? 'x-left'
            : o <= p + 1 && u <= o && s <= g - 2 && d + 2 <= c && 'x-right'
        }
        if (e.length > 0)
          for (var h in e)
            if (e[h] !== t && ae(e, t, a, n, e[h])) return ae(e, t, a, n, e[h])
        return !1
      }
      function ne(e, t) {
        var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : null,
          r = te(t),
          o = parseInt(r.left, 10),
          l = o + Z(t),
          s = parseInt(r.top, 10),
          c = s + ee(t)
        if (
          (a && (l = (o = a) + Z(t)), n && (c = (s = n) + ee(t)), null !== i)
        ) {
          var m = te(i),
            u = parseInt(m.left, 10),
            p = u + Z(i),
            d = parseInt(m.top, 10),
            g = d + ee(i)
          return l >= u && p >= o && s <= g - (g - d) - 1 && d - 1 <= c
            ? 'y-top'
            : l >= u && p >= o && s <= g + 1 && g + 1 <= c && 'y-bottom'
        }
        if (e.length > 0)
          for (var h in e)
            if (e[h] !== t && ne(e, t, a, n, e[h])) return ne(e, t, a, n, e[h])
        return !1
      }
      a(53)
      var ie = (function(e) {
          function t(e) {
            var a
            return (
              Object(c.a)(this, t),
              ((a = Object(u.a)(this, Object(p.a)(t).call(this, e))).state =
                J.a),
              (a.state.underConstructionMessageShown = !0),
              a
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              { key: 'componentDidMount', value: function() {} },
              {
                key: 'componentWillMount',
                value: function() {
                  document.addEventListener(
                    'keydown',
                    function(e) {
                      this.keyDown(e)
                    }.bind(this)
                  ),
                    document.addEventListener(
                      'keyup',
                      function(e) {
                        this.keyUp(e)
                      }.bind(this)
                    ),
                    this.clearGameLoopInterval(),
                    this.clearGameTimeInterval()
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener(
                    'keydown',
                    function(e) {
                      this.keyDown(e)
                    }.bind(this)
                  ),
                    document.removeEventListener(
                      'keyup',
                      function(e) {
                        this.keyUp(e)
                      }.bind(this)
                    )
                }
              },
              {
                key: 'keyDown',
                value: function(e) {
                  var t = function(e) {
                      for (
                        var t = arguments.length,
                          a = new Array(t > 1 ? t - 1 : 0),
                          n = 1;
                        n < t;
                        n++
                      )
                        a[n - 1] = arguments[n]
                      var i = a.slice(0),
                        r = Object.values(W).indexOf(e.keyCode)
                      if (
                        ((e.keyCode !== R && e.keyCode !== _) ||
                          e.preventDefault(),
                        r > -1)
                      ) {
                        e.preventDefault()
                        var o = Object.keys(W)[r],
                          l = !0
                        for (var s in i) i[s] === o && (l = !1)
                        return (
                          l && ('SPACE_BAR' === o ? i.unshift(o) : i.push(o)), i
                        )
                      }
                    }.apply(
                      void 0,
                      [e].concat(Object(I.a)(this.state.movementQueue))
                    ),
                    a = null
                  if (t) {
                    for (var n in t) 'SPACE_BAR' === t[n] && (a = !0)
                    this.setState({ movementQueue: t, spaceBarHeld: a })
                  }
                }
              },
              {
                key: 'keyUp',
                value: function(e) {
                  var t = function(e) {
                      for (
                        var t = arguments.length,
                          a = new Array(t > 1 ? t - 1 : 0),
                          n = 1;
                        n < t;
                        n++
                      )
                        a[n - 1] = arguments[n]
                      var i = a.slice(0),
                        r = Object.values(W).indexOf(e.keyCode)
                      if (r > -1) {
                        e.preventDefault()
                        var o = Object.keys(W)[r]
                        for (var l in i) i[l] === o && i.splice(l, 1)
                        return i
                      }
                    }.apply(
                      void 0,
                      [e].concat(Object(I.a)(this.state.movementQueue))
                    ),
                    a = !1,
                    n = null
                  if (t) {
                    for (var i in t) 'SPACE_BAR' === t[i] && (a = !0)
                    a || (n = !0),
                      this.setState({
                        movementQueue: t,
                        spaceBarHeld: a,
                        ableToJump: n || this.state.ableToJump
                      })
                  }
                }
              },
              {
                key: 'loadGame',
                value: function() {
                  te('gameboard-wrapper').left = '0px'
                  var e = te('clouds-1-sprite')
                  ;(e.left = 0.05 * V + 'px'), (e.top = '72px')
                  var t = te('clouds-2-sprite')
                  ;(t.left = 0.7 * V + 'px'), (t.top = '120px')
                  var a = te('clouds-3-sprite')
                  ;(a.left = 0.4 * V + 'px'), (a.top = '30px')
                  var n = te('clouds-4-sprite')
                  ;(n.left = 0.6 * V + 'px'), (n.top = '72px')
                  var i = te('clouds-5-sprite')
                  ;(i.left = 0.2 * V + 'px'), (i.top = '120px')
                  var r = te('clouds-6-sprite')
                  ;(r.left = 0.9 * V + 'px'), (r.top = '30px')
                  var o = te('gameboard-ground-1'),
                    l = ee('gameboard-ground-1')
                  ;(o.top = 600 - l + 'px'),
                    (o.left = '0px'),
                    (o.width = '1500px')
                  var s = te('gameboard-ground-2'),
                    c = ee('gameboard-ground-2')
                  ;(s.top = 600 - c + 'px'),
                    (s.left = '1650px'),
                    (s.width = '2800px')
                  var m = te('gameboard-ground-3'),
                    u = ee('gameboard-ground-3')
                  ;(m.top = 600 - u + 'px'),
                    (m.left = '5725px'),
                    (m.width = '3400px')
                  var p = te('gameboard-ground-4'),
                    d = ee('gameboard-ground-4')
                  ;(p.top = 600 - d + 'px'),
                    (p.left = '9275px'),
                    (p.width = '725px')
                }
              },
              {
                key: 'initialize',
                value: function() {
                  var e = []
                  e.push('gameboard-ground-1'),
                    e.push('gameboard-ground-2'),
                    e.push('gameboard-ground-3'),
                    e.push('gameboard-ground-4')
                  var t = te(Q)
                  ;(t.height = '50px'),
                    (t.width = '50px'),
                    (t.visibility = 'visible'),
                    (t.top = '400px'),
                    (t.left = '0px'),
                    e.push(Q)
                  var a = te(Y)
                  ;(a.height = '40px'),
                    (a.width = '40px'),
                    (a.top = 500 - ee(Y) + 'px'),
                    (a.left = '1800px'),
                    (a.visibility = 'visible'),
                    e.push(Y),
                    this.setState({ spritesWithBoxCollider: e }),
                    this.startIntervals()
                }
              },
              {
                key: 'startGameLoopInterval',
                value: function() {
                  var e = this
                  this.gameLoopInterval = setInterval(function() {
                    return e.gameLoop()
                  }, 16)
                }
              },
              {
                key: 'clearGameLoopInterval',
                value: function() {
                  clearInterval(this.gameLoopInterval)
                }
              },
              {
                key: 'startGameTimeInterval',
                value: function() {
                  var e = this
                  this.gameTimeInterval = setInterval(function() {
                    return e.setState(function(e, t) {
                      return {
                        gameTime: e.gameTime + 1,
                        mouseTimer: e.mouseTimer + 1
                      }
                    })
                  }, 1e3)
                }
              },
              {
                key: 'clearGameTimeInterval',
                value: function() {
                  clearInterval(this.gameTimeInterval)
                }
              },
              {
                key: 'clearSpriteAnimationInterval',
                value: function() {
                  clearInterval(this.spriteAnimationInterval)
                }
              },
              {
                key: 'startIntervals',
                value: function() {
                  this.startGameLoopInterval(), this.startGameTimeInterval()
                }
              },
              {
                key: 'clearIntervals',
                value: function() {
                  this.clearGameLoopInterval(), this.clearGameTimeInterval()
                }
              },
              {
                key: 'gameLoop',
                value: function() {
                  this.movePlayerSprite.apply(
                    this,
                    Object(I.a)(this.state.movementQueue)
                  )
                }
              },
              {
                key: 'handleGameState',
                value: function(e) {
                  var t = this.state.menuState,
                    a = this.state.gameInProgress
                  switch (e) {
                    case 'startGame':
                      this.initialize(), (t = !1), (a = !0)
                      break
                    case 'resumeGame':
                      this.startIntervals(), (t = !1)
                      break
                    case 'pauseMenu':
                      this.clearIntervals(), (t = e)
                      break
                    default:
                      t = e
                  }
                  this.setState({ menuState: t, gameInProgress: a })
                }
              },
              {
                key: 'showMouse',
                value: function() {
                  this.state.gameInProgress && this.setState({ mouseTimer: 0 })
                }
              },
              {
                key: 'checkIfPlayerSpriteShouldFall',
                value: function() {
                  if (!this.state.playerSpriteJumping)
                    return 'y-top' !== ne(this.state.spritesWithBoxCollider, Q)
                }
              },
              {
                key: 'movePlayerSprite',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    t[a] = arguments[a]
                  var n = t.slice(0),
                    i = !1,
                    r = !1,
                    o = !1,
                    l = te(Q),
                    s = parseInt(l.left, 10),
                    c = parseInt(l.top, 10),
                    m = s,
                    u = c,
                    p = te('gameboard-wrapper'),
                    d = parseFloat(p.left, 10),
                    g = this.checkIfPlayerSpriteShouldFall()
                  if (n.length > 0)
                    for (var h in n)
                      switch (n[h]) {
                        case 'LEFT_ARROW':
                          i = !0
                          break
                        case 'RIGHT_ARROW':
                          r = !0
                          break
                        case 'SPACE_BAR':
                          o = !0
                          break
                        default:
                          throw new Error('Invalid movement: ', n[h])
                      }
                  this.state.playerSpriteJumping && (o = !0),
                    i && r && (i = r = !1),
                    i &&
                      (m = function(e) {
                        for (
                          var t = arguments.length,
                            a = new Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          a[n - 1] = arguments[n]
                        var i = a.slice(0),
                          r = e
                        return (
                          r > 0 && (r -= $),
                          r <= 0 && (r = 0),
                          'x-right' === ae(i, Q, r) && (r = e),
                          r
                        )
                      }.apply(
                        void 0,
                        [s].concat(
                          Object(I.a)(this.state.spritesWithBoxCollider)
                        )
                      )),
                    r &&
                      (m = function(e) {
                        for (
                          var t = arguments.length,
                            a = new Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          a[n - 1] = arguments[n]
                        var i = a.slice(0),
                          r = e,
                          o = Z(Q)
                        return (
                          r + o < V && (r += $),
                          r + o >= V && (r = V - o),
                          'x-left' === ae(i, Q, r) && (r = e),
                          r
                        )
                      }.apply(
                        void 0,
                        [s].concat(
                          Object(I.a)(this.state.spritesWithBoxCollider)
                        )
                      )),
                    o &&
                      (this.state.playerSpriteJumping ||
                        g ||
                        !this.state.ableToJump ||
                        this.setPlayerSpriteJumpingState(c),
                      this.state.playerSpriteJumping &&
                        (this.state.spaceBarHeld &&
                        u <= this.state.startingYJumpPosition - 150
                          ? this.falsifyPlayerSpriteJumpingState()
                          : !this.state.spaceBarHeld &&
                            u <= this.state.startingYJumpPosition - 100
                          ? this.falsifyPlayerSpriteJumpingState()
                          : (u = function(e) {
                              for (
                                var t = arguments.length,
                                  a = new Array(t > 1 ? t - 1 : 0),
                                  n = 1;
                                n < t;
                                n++
                              )
                                a[n - 1] = arguments[n]
                              var i = e
                              return (
                                'y-bottom' ===
                                  ne(a.slice(0), Q, null, (i -= K)) && (i = e),
                                i
                              )
                            }.apply(
                              void 0,
                              [c].concat(
                                Object(I.a)(this.state.spritesWithBoxCollider)
                              )
                            )) === c &&
                            this.falsifyPlayerSpriteJumpingState())),
                    g &&
                      (u = function(e) {
                        var t = e
                        return (t += K)
                      }.apply(
                        void 0,
                        [c].concat(
                          Object(I.a)(this.state.spritesWithBoxCollider)
                        )
                      )),
                    (d = (function(e) {
                      var t,
                        a = (X - Z(Q)) / 2
                      return e >= a && (t = e - a), t + X > V && (t = V - X), -t
                    })(m)),
                    (l.left = m + 'px'),
                    (l.top = u + 'px'),
                    (p.left = d + 'px'),
                    this.setState({})
                }
              },
              {
                key: 'setPlayerSpriteJumpingState',
                value: function(e) {
                  this.setState({
                    playerSpriteJumping: !0,
                    startingYJumpPosition: e,
                    ableToJump: !1
                  })
                }
              },
              {
                key: 'falsifyPlayerSpriteJumpingState',
                value: function() {
                  this.setState({ playerSpriteJumping: !1 })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Pixelated'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Pixelated is a simple sidescrolling RPG, where the object is to get to the end as quickly as possible. How fast can you do it?'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/pixelated'
                      })
                    ),
                    this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        {
                          style: {
                            padding: '72px 0',
                            maxWidth: '600px',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                          }
                        },
                        i.a.createElement(
                          'h3',
                          null,
                          'This app is under construction, feel free to preview it as-is or view the progress in the code.'
                        ),
                        i.a.createElement(
                          'picture',
                          { style: { width: '100%' } },
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/construction.webp'
                          }),
                          i.a.createElement('img', {
                            style: { width: '100%' },
                            src: '/images/construction.png',
                            alt: 'Under Construction'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            style: {
                              color: 'white',
                              cursor: 'pointer',
                              margin: '12px auto'
                            },
                            className: 'portfolio-cta',
                            onClick: function() {
                              return e.setState({
                                underConstructionMessageShown: !1
                              })
                            }
                          },
                          'preview game'
                        ),
                        i.a.createElement(
                          'a',
                          {
                            style: { margin: '12px auto' },
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/pixelated',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      ),
                    !this.state.underConstructionMessageShown &&
                      i.a.createElement(
                        'div',
                        { className: 'app-wrapper' },
                        i.a.createElement(
                          'div',
                          {
                            className: 'gameboard-foreground '.concat(
                              this.state.mouseTimer < 2 ? 'show-mouse' : ''
                            ),
                            id: 'gameboard-foreground',
                            style: {
                              height: 600,
                              width: X,
                              backgroundColor: '#AACDF8'
                            },
                            onMouseMove: this.showMouse.bind(this)
                          },
                          i.a.createElement(
                            'div',
                            {
                              className: 'game-menu',
                              style: {
                                display: this.state.menuState ? 'flex' : 'none'
                              }
                            },
                            i.a.createElement(
                              'div',
                              {
                                style: {
                                  display:
                                    'startMenu' === this.state.menuState
                                      ? 'flex'
                                      : 'none'
                                }
                              },
                              i.a.createElement('img', {
                                src:
                                  '/svg/projects/pixelated/pixelated-logo.svg',
                                alt: 'Pixels'
                              }),
                              i.a.createElement(
                                'button',
                                {
                                  onClick: this.handleGameState.bind(
                                    this,
                                    'startGame'
                                  )
                                },
                                'Start'
                              ),
                              i.a.createElement(
                                'button',
                                {
                                  onClick: this.handleGameState.bind(
                                    this,
                                    'showControlMenu'
                                  )
                                },
                                'Controls'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              {
                                style: {
                                  display:
                                    'pauseMenu' === this.state.menuState
                                      ? 'flex'
                                      : 'none'
                                }
                              },
                              i.a.createElement('img', {
                                src:
                                  '/svg/projects/pixelated/pixelated-logo.svg',
                                alt: 'Pixels'
                              }),
                              i.a.createElement(
                                'button',
                                {
                                  onClick: this.handleGameState.bind(
                                    this,
                                    'resumeGame'
                                  )
                                },
                                'Resume'
                              ),
                              i.a.createElement(
                                'button',
                                {
                                  onClick: this.handleGameState.bind(
                                    this,
                                    'showControlMenu'
                                  )
                                },
                                'Controls'
                              )
                            ),
                            i.a.createElement(
                              'div',
                              {
                                className: 'control-menu',
                                style: {
                                  display:
                                    'showControlMenu' === this.state.menuState
                                      ? 'flex'
                                      : 'none'
                                }
                              },
                              i.a.createElement(
                                'span',
                                {
                                  style: {
                                    color: 'white',
                                    textAlign: 'center',
                                    marginBottom: '20px'
                                  }
                                },
                                'Use the keyboard to control'
                              ),
                              i.a.createElement(
                                'div',
                                null,
                                i.a.createElement(
                                  'svg',
                                  {
                                    width: '30',
                                    height: '30',
                                    viewBox: '0 0 40 40'
                                  },
                                  i.a.createElement('path', {
                                    fill: '#fff',
                                    d: 'M20 5v7h14v16h-14v7l-15-15 15-15z'
                                  })
                                ),
                                'Move left (left-arrow)'
                              ),
                              i.a.createElement(
                                'div',
                                null,
                                i.a.createElement(
                                  'svg',
                                  {
                                    width: '30',
                                    height: '30',
                                    viewBox: '0 0 40 40'
                                  },
                                  i.a.createElement('path', {
                                    fill: '#fff',
                                    d: 'M35 20l-15 15v-7h-14v-16h14v-7l15 15z'
                                  })
                                ),
                                'Move right (right-arrow)'
                              ),
                              i.a.createElement(
                                'div',
                                null,
                                i.a.createElement(
                                  'svg',
                                  {
                                    width: '36',
                                    height: '36',
                                    viewBox: '0 0 48 48'
                                  },
                                  i.a.createElement('path', {
                                    fill: '#fff',
                                    d:
                                      'M36 18h4.031v12h-32.063v-12h4.031v7.969h24v-7.969z'
                                  })
                                ),
                                'Jump (space-bar)'
                              ),
                              i.a.createElement(
                                'button',
                                {
                                  onClick: this.handleGameState.bind(
                                    this,
                                    this.state.gameInProgress
                                      ? 'pauseMenu'
                                      : 'startMenu'
                                  )
                                },
                                'Return'
                              )
                            )
                          ),
                          i.a.createElement(
                            'div',
                            {
                              className: 'gameboard-wrapper',
                              style: {
                                width: V,
                                height: 600,
                                transition: 'transform 0.3s'
                              },
                              id: 'gameboard-wrapper'
                            },
                            i.a.createElement('div', {
                              className: 'gameboard-ground',
                              id: 'gameboard-ground-1'
                            }),
                            i.a.createElement('div', {
                              className: 'gameboard-ground',
                              id: 'gameboard-ground-2'
                            }),
                            i.a.createElement('div', {
                              className: 'gameboard-ground',
                              id: 'gameboard-ground-3'
                            }),
                            i.a.createElement('div', {
                              className: 'gameboard-ground',
                              id: 'gameboard-ground-4'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-1-sprite clouds',
                              id: 'clouds-1-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-2-sprite clouds',
                              id: 'clouds-2-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-3-sprite clouds',
                              id: 'clouds-3-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-1-sprite clouds',
                              id: 'clouds-4-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-2-sprite clouds',
                              id: 'clouds-5-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'clouds-3-sprite clouds',
                              id: 'clouds-6-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'enemy-sprite',
                              id: 'enemy-1-sprite'
                            }),
                            i.a.createElement('div', {
                              className: 'player-sprite',
                              id: 'player-sprite'
                            })
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'score-wrapper' },
                            i.a.createElement('div', {
                              className: 'score-coin'
                            }),
                            'x',
                            this.state.score
                          ),
                          i.a.createElement('div', {
                            className: 'pause-button',
                            style: {
                              display: this.state.menuState ? 'none' : 'flex'
                            },
                            onClick: this.handleGameState.bind(
                              this,
                              'pauseMenu'
                            )
                          }),
                          i.a.createElement(
                            'div',
                            { className: 'timer' },
                            i.a.createElement(
                              'svg',
                              {
                                width: '24',
                                height: '24',
                                viewBox: '0 0 24 24'
                              },
                              i.a.createElement('path', {
                                d:
                                  'M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z'
                              })
                            ),
                            this.state.gameTime
                          )
                        ),
                        i.a.createElement(
                          'a',
                          {
                            className: 'portfolio-cta',
                            href:
                              'https://github.com/arjohnston/portfolio-react/tree/master/src/pages/projects/pixelated',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: 'Visit my Github profile'
                          },
                          'view code'
                        )
                      )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        re = (a(54),
        (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.className ? this.props.className : ''
                  return i.a.createElement(
                    'div',
                    { className: 'content-section '.concat(e) },
                    this.props.children
                  )
                }
              }
            ]),
            t
          )
        })(n.Component)),
        oe = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Boilerplates'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Boilerplates'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        le = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Bloc'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Bloc'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        se = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Directions'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Directions'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        ce = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Dashboard'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Dashboard'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        me = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Emergency University'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Emergency University'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        ue = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Mass Notifications'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Mass Notifications'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        pe = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { style: { backgroundColor: '#393E46' } },
                    i.a.createElement(
                      C.Helmet,
                      null,
                      i.a.createElement('title', null, 'Portfolio'),
                      i.a.createElement('meta', {
                        name: 'description',
                        content:
                          'Andrew Johnston is a web developer, specialized in react.js for professional and recreational use.'
                      }),
                      i.a.createElement('link', {
                        rel: 'canonical',
                        href: 'https://arjohnston.io/projects/bloc'
                      })
                    ),
                    i.a.createElement('div', {
                      className: 'hero',
                      style: {
                        backgroundImage:
                          'url(/images/projects/boilerplates.png)'
                      }
                    }),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane-800 center' },
                        i.a.createElement('h1', null, 'Portfolio'),
                        i.a.createElement(
                          'span',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      )
                    ),
                    i.a.createElement(
                      re,
                      null,
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'p',
                          null,
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'pane pane-50' },
                        i.a.createElement(
                          'picture',
                          null,
                          i.a.createElement('source', {
                            type: 'image/webp',
                            srcSet: '/images/projects/boilerplates.webp'
                          }),
                          i.a.createElement('img', {
                            src: '/images/projects/boilerplates.png',
                            alt: 'TEMP'
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        de = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    { className: 'error-wrapper' },
                    i.a.createElement(
                      'div',
                      {
                        className: 'pane-600 center',
                        style: { paddingTop: '72px' }
                      },
                      i.a.createElement(
                        'h1',
                        null,
                        "Whoops, looks like the page doesn't exist. Try visiting one of the projects below."
                      )
                    ),
                    i.a.createElement(q, null)
                  )
                }
              }
            ]),
            t
          )
        })(n.Component),
        ge = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    g.a,
                    null,
                    i.a.createElement(
                      b,
                      null,
                      i.a.createElement(
                        M,
                        null,
                        i.a.createElement(
                          h.c,
                          null,
                          i.a.createElement(h.a, {
                            exact: !0,
                            path: '/',
                            component: F
                          }),
                          i.a.createElement(h.a, {
                            exact: !0,
                            path: '/projects/',
                            component: q
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/tic-tac-toe',
                            component: A
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/simon',
                            component: D
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/markdown-editor',
                            component: H
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/pixelated',
                            component: ie
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/boilerplates',
                            component: oe
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/bloc',
                            component: le
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/directions',
                            component: se
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/dashboard',
                            component: ce
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/emergency-university',
                            component: me
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/mass-notification',
                            component: ue
                          }),
                          i.a.createElement(h.a, {
                            path: '/projects/portfolio',
                            component: pe
                          }),
                          i.a.createElement(h.a, {
                            render: function() {
                              return i.a.createElement(de, null)
                            }
                          })
                        )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(n.Component)
      o.a.render(i.a.createElement(ge, null), document.getElementById('root')),
        (function() {
          if ('serviceWorker' in navigator) {
            if (new URL('', window.location).origin !== window.location.origin)
              return
            window.addEventListener('load', function() {
              var e = ''.concat('', '/service-worker.js')
              l
                ? (function(e) {
                    fetch(e)
                      .then(function(t) {
                        404 === t.status ||
                        -1 ===
                          t.headers.get('content-type').indexOf('javascript')
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload()
                              })
                            })
                          : s(e)
                      })
                      .catch(function() {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        )
                      })
                  })(e)
                : s(e)
            })
          }
        })()
    }
  },
  [[27, 1, 2]]
])
//# sourceMappingURL=main.fb795267.chunk.js.map
