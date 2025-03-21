import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/image/logo.png'

const Header = () => {
  const location = useLocation()

  const menu = [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Projects',
      link: '#projects'
    },
    {
      name: 'About',
      link: '#about'
    },
    // {
    //   name: 'Contact',
    //   link: '#contact'
    // }
  ]
  return (
    <div data-aos="fade-down" className="relative">
      <div className=" top-0 left-0 right-0 mx-32 flex items-center justify-between">
        <img src={logo} alt="" className='w-36 lg:w-44 mx-auto' />
        <div>
          <ul className='flex gap-11 text-on-primary'>
            {/* {menu.map((men, index) => {
              console.log(location.hash)
              return (
                <li key={index}>
                  <Link to={men.link} className={`${location.hash.includes(men.name.toLowerCase()) ? 'underline' : 'no-underline hover:underline'} underline-offset-8 decoration-primary decoration-2 transition ease-in-out duration-300`}>{men.name}</Link>
                </li>
              )
            })} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header