import PrimaryButton from "../components/Button/PrimaryButton"
import { Link } from 'react-router-dom'
import htmlIcon from '../assets/icon/tools/html.png'
import cssIcon from '../assets/icon/tools/css.png'
import jsIcon from '../assets/icon/tools/js.png'
import bootstrapIcon from '../assets/icon/tools/bootstrap.png'
import sassIcon from '../assets/icon/tools/sass.png'
import tailwindIcon from '../assets/icon/tools/tailwind.png'
import reactIcon from '../assets/icon/tools/react.png'
import jqueryIcon from '../assets/icon/tools/jquery.png'
import antdIcon from '../assets/icon/tools/antd.png'
import reduxIcon from '../assets/icon/tools/redux.png'
import nodejsIcon from '../assets/icon/tools/nodejs.png'
import expressIcon from '../assets/icon/tools/express.png'

const AboutMe = () => {
  const toolsIcon = [
    { url: htmlIcon, alt: 'html' },
    { url: cssIcon, alt: 'css' },
    { url: jsIcon, alt: 'js' },
    { url: bootstrapIcon, alt: 'bootstrap' },
    { url: sassIcon, alt: 'sass' },
    { url: tailwindIcon, alt: 'tailwind' },
    { url: reactIcon, alt: 'react' },
    { url: jqueryIcon, alt: 'jquery' },
    { url: antdIcon, alt: 'antd' },
    { url: reduxIcon, alt: 'redux' },
    { url: nodejsIcon, alt: 'nodejs' },
    { url: expressIcon, alt: 'express' },
  ]
  return (
    <div id="projects" className='min-h-screen h-fit w-100' style={{ paddingTop: '18vh' }}>
      <div className='w-3/5 mx-auto'>
        <h1 className='title text-4xl font-semibold my-1 text-on-primary mx-auto w-fit'>About Me</h1>
        <hr className="border-primary mx-auto w-24 border-2 rounded-b-lg rounded-2xl" />
        <div className="mt-12 mb-16 flex items-center justify-between gap-10 w-100">
          <p className="project-desc text-on-primary text-center">I'm a Frontend Developer specialize in problem-solving and logical thinking, with a passion for creating meaningful experiences through technology. I'm also experienced in using JavaScript, React, and Tailwind CSS to create interactive webpages. Feel free to connect with me if you'd like to learn more about my work.</p>
        </div>
      </div>
      <div className='w-3/5 mx-auto'>
        <h1 className='title text-2xl font-semibold my-1 text-on-primary mx-auto w-fit'>Tools & Skills</h1>
        <hr className="border-primary mx-auto w-24 border-2 rounded-b-lg rounded-2xl" />
        <div className="mt-8 mb-16 flex justify-center gap-6 w-100 bg-primary rounded-b-lg rounded-lg p-2">
          {toolsIcon.map((tools) => {
            return (
              <img src={tools.url} alt={tools.alt} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutMe