import PrimaryButton from "../../Button/PrimaryButton"
import { Link } from 'react-router-dom'
import htmlIcon from '../../../assets/icon/tools/html.png'
import cssIcon from '../../../assets/icon/tools/css.png'
import jsIcon from '../../../assets/icon/tools/js.png'
import bootstrapIcon from '../../../assets/icon/tools/bootstrap.png'
import sassIcon from '../../../assets/icon/tools/sass.png'
import tailwindIcon from '../../../assets/icon/tools/tailwind.png'
import reactIcon from '../../../assets/icon/tools/react.png'
import jqueryIcon from '../../../assets/icon/tools/jquery.png'
import antdIcon from '../../../assets/icon/tools/antd.png'
import reduxIcon from '../../../assets/icon/tools/redux.png'
import nodejsIcon from '../../../assets/icon/tools/nodejs.png'
import expressIcon from '../../../assets/icon/tools/express.png'

const AboutMe = () => {
  const toolsIcon = [
    // { name: "HTML", url: htmlIcon, alt: 'html' },
    // { name: "CSS", url: cssIcon, alt: 'css' },
    // { name: "Javascript", url: jsIcon, alt: 'js' },
    { name: "Typescript", url: reactIcon, alt: 'react' },
    { name: "NextJS", url: reactIcon, alt: 'react' },
    { name: "ReactJS", url: reactIcon, alt: 'react' },
    { name: "jQuery", url: jqueryIcon, alt: 'jquery' },
    { name: "Tailwind", url: tailwindIcon, alt: 'tailwind' },
    { name: "Bootstrap", url: bootstrapIcon, alt: 'bootstrap' },
    { name: "SASS", url: sassIcon, alt: 'sass' },
    { name: "Ant Design", url: antdIcon, alt: 'antd' },
    { name: "Redux", url: reduxIcon, alt: 'redux' },
    { name: "Jest", url: reduxIcon, alt: 'redux' },
    { name: "NodeJS", url: nodejsIcon, alt: 'nodejs' },
    { name: "ExpressJS", url: expressIcon, alt: 'express' },
  ]
  return (
    <div id="projects" className='min-h-screen h-fit w-100 pb-40' style={{ paddingTop: '18vh' }}>
      <div className='w-3/5 mx-auto'>
        <h1 className='title text-4xl font-semibold my-1 text-on-primary mx-auto w-fit'>About Me</h1>
        <hr className="border-primary mx-auto w-24 border-2 rounded-b-lg rounded-2xl" />
        <div className="mt-8 mb-16 flex items-center justify-between gap-10 w-100">
          <p className="project-desc text-on-primary text-center">I am a professional frontend web developer with experience in Javascript, React, and Tailwind CSS. With a passion for creating visually appealing and user-friendly websites, I strive to deliver high-quality solutions that exceed client expectations. My expertise lies in developing responsive and interactive interfaces, utilizing modern web technologies to optimize performance and enhance user experience.</p>
        </div>
      </div>
      <div className='w-3/5 mx-auto'>
        <h1 className='title text-2xl font-semibold my-1 text-on-primary mx-auto w-fit'>Tools & Skills</h1>
        <hr className="border-primary mx-auto w-24 border-2 rounded-b-lg rounded-2xl" />
        <div className="mt-8 mb-16 flex flex-wrap justify-center gap-6 w-full bg-primary rounded-b-lg rounded-lg py-7 px-2">
          {toolsIcon.map((tools) => {
            return (
              <div className="text-center w-20">
                <img src={tools.url} alt={tools.alt} className="mx-auto" />
                <h6 className="text-sm font-semibold text-on-primary mt-1">{tools?.name}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutMe