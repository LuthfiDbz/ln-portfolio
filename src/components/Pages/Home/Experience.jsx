import { useEffect } from "react"
import PrimaryButton from "../../Button/PrimaryButton"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"
import logo from '../../../assets/image/superkul.png'

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])

  useEffect(() => {
    getAllExperience()
  }, [])

  const getAllExperience = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/projects`)
      console.log(data)
      setExperienceData(data.reverse())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id="projects" className='h-fit w-100' style={{ paddingTop: '12vh' }}>
      <div className='w-4/6 mx-auto'>
        <h1 className='title text-4xl font-semibold my-1 text-on-primary mx-auto w-fit'>My Experience</h1>
        <hr className="border-primary mx-auto w-28 border-2 rounded-b-lg rounded-2xl" />
        <div className="flex bg-primary bg-opacity-80 mt-10 text-white items-start rounded-lg py-4 px-6 gap-8">
          <img src={logo} alt="" className='w-2/12 bg-white p-2 rounded-md' />
          <div className="w-7/12 ms-2">
            <h4 className="font-bold text-xl">Frontend Developer</h4>
            <h4 className="font-semibold text-base mb-4">PT. Superkul Amerta Indonesia</h4>
            <ul>
              <li>- Create and maintenance customer website application with React Bootstrap and SASS</li>
              <li>- Maintenance admin and mitra website with Ant Design and React Redux</li>
              <li>- Implement Google Analytic into customer landing page</li>
            </ul>
          </div>
          <h5 className="text-end w-3/12 font-bold">Feb 2023 - Present</h5>
        </div>
        <div className="flex bg-primary bg-opacity-80 mt-10 text-on-primary items-start rounded-lg py-4 px-6 gap-8">
          <div className='w-2/12 bg-on-primary p-2 rounded-md text-secondary text-center text-2xl font-bold'>ABC</div>
          <div className="w-7/12 ms-2">
            <h4 className="font-bold text-xl">Frontend Developer</h4>
            <h4 className="font-semibold text-base mb-4">PT. Aktif Bangun Citra</h4>
            <ul>
            </ul>
          </div>
          <h5 className="text-end w-3/12 font-bold">Nov 2022 - Feb 2023</h5>
        </div>
      </div>
    </div>
  )
}

export default Experience