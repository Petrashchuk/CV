import React, { useRef, useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import image from '../../img/me_1.jpg'

export function HeaderMain () {
  const textEL = useRef(null)
  useEffect(() => {
    let typewriter = new Typewriter(textEL.current, {
      delay: 25,
      cursorClassName: '',
      strings: ['JavaScript', 'TypeScript', 'React JS & React Native', 'Node JS'],
      autoStart: true,
    })
    typewriter
      .typeString("I'm Andrii Petrashchuk")
      .callFunction(() => textEL.current.lastChild.remove())
      .start()
  }, [])
  return (
    <>
      <main>
        <div className='wrapper'>
          <div className="top-box">
            <div className="fl image-box">
              <img src={image}
                   alt="andrii petrashchuk"></img>
            </div>
            <div className="fl bio-box">
              <ul>
                <li>
                  <h2 ref={textEL} id="text"></h2>
                  <p>I'm a Front-end developer. <br />I have 2 years of
                    experience almost.</p>
                </li>
                <li>
                  <span> <b> Age: </b><span id="age">21</span></span>
                </li>
                <li>
                  <span><b> Location: </b> Lviv, Ukraine</span>
                </li>
                <li>
                        <span> <b> Email: </b> <a
                          href="mailto:loza.andriy7@gmail.com">triumph.town99@gmail.com</a></span>
                </li>
                <li>
                  <span> <b> Phone:  </b> <a
                    href="tel:380634101439">+380688022864</a></span>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a href="skype:ba3is3a?call" target="_blank"
                     title="Skype">
                    <i className="fa fa-skype" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/andrii-petrashchuk-567324180/"
                    target="_blank" title="Linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Petrashchuk" target="_blank"
                     title="GitHUb">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="icon-download"
                    style={{ display: 'inline-block' }}>
                  <a className="cv" href="./pdf/Andrii Petrashchuk.pdf"
                     download="Andrii Petrashchuk.pdf" title="Download CV"
                     style={{ float: 'left' }}>
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                  <span>←Download CV</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}