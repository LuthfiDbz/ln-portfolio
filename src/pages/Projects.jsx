import { useEffect } from "react"
import PrimaryButton from "../components/Button/PrimaryButton"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    getAllProjects()
  }, [])

  const getAllProjects = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/projects`)
      console.log(data)
      setProjectsData(data.reverse())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id="projects" className='h-fit w-100' style={{ paddingTop: '12vh' }}>
      <div className='w-3/5 mx-auto'>
        <h1 className='title text-4xl font-semibold my-1 text-on-primary mx-auto w-fit'>Projects</h1>
        <hr className="border-primary mx-auto w-24 border-2 rounded-b-lg rounded-2xl" />
        {projectsData.map((proj) => {
          return (
            <div className="mt-12 mb-16 flex items-center justify-between gap-10 w-100">
              <div className="project-img w-3/6 h-64">
                <img
                  className="h-full w-100 rounded-b-lg rounded-lg"
                  // src="https://firebasestorage.googleapis.com/v0/b/luthfinr-portfolio.appspot.com/o/portfolio%2Fedsigma.png?alt=media&token=a6079309-050b-4f04-80c1-6d6bd8d22278" 
                  src={proj.imageLink}
                  alt=""
                />
              </div>
              <div className="info w-3/6">
                <h4 className="project-name text-on-primary text-2xl font-semibold">{proj.name || proj.projectName}</h4>
                <h5 className="project-tech text-primary font-semibold mb-4">ReactJS - Redux - Bootstrap</h5>
                <p className="project-desc text-on-primary">{proj.desc}</p>
                <Link
                  // to={'https://edsigma.netlify.app/'}
                  to={proj.link}
                  target="_blank"
                >
                  <PrimaryButton
                    text="Visit Page"
                  />
                </Link>
              </div>
            </div>
          )
        })}
        {/* <div className="mt-12 mb-16 flex items-center justify-between gap-10 w-100">
          <div className="project-img w-3/6 h-72">
            <img className="h-full w-100 rounded-b-lg rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/luthfinr-portfolio.appspot.com/o/portfolio%2Fedsigma.png?alt=media&token=a6079309-050b-4f04-80c1-6d6bd8d22278" alt="" />
          </div>
          <div className="info w-3/6">
            <h4 className="project-name text-on-primary text-2xl font-semibold">Edsigma Online Course</h4>
            <h5 className="project-tech text-primary font-semibold mb-4">ReactJS - Redux - Bootstrap</h5>
            <p className="project-desc text-on-primary">An investment online course for beginner and professional.</p>
            <Link
              to={'https://edsigma.netlify.app/'}
              target="_blank"
            >
              <PrimaryButton
                text="Visit Page"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects