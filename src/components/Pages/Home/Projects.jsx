import { useEffect } from "react"
import PrimaryButton from "../../Button/PrimaryButton"
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
        <h1 className='title text-4xl font-semibold my-1 text-on-primary mx-auto w-fit'>My Projects</h1>
        <hr className="border-primary mx-auto w-28 border-2 rounded-b-lg rounded-2xl" />
        {projectsData.map((proj, index) => {
          return (
            <div key={index} className="mt-12 mb-16 flex items-start justify-between gap-10 w-100">
              {index % 2 === 0 &&
                <div className="project-img w-3/6 h-64">
                  <img
                    className="h-full w-100 rounded-b-lg rounded-lg"
                    src={proj.imageLink}
                    alt=""
                  />
                </div>
              }
              <div className={`info w-3/6 ${index % 2 === 1 && "text-end"} mt-2`}>
                <h4 className="project-name text-on-primary text-2xl font-semibold">{proj.name || proj.projectName}</h4>
                <h5 className="project-tech text-primary font-semibold mb-4">{proj?.tech?.join(' - ')}</h5>
                <p className="project-desc text-on-primary">{proj.desc}</p>
                <Link
                  to={proj.link}
                  target="_blank"
                >
                  <PrimaryButton
                    text="Visit Page"
                  />
                </Link>
              </div>
              {index % 2 === 1 &&
                <div className="project-img w-3/6 h-64">
                  <img
                    className="h-full w-100 rounded-b-lg rounded-lg"
                    src={proj.imageLink}
                    alt=""
                  />
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects