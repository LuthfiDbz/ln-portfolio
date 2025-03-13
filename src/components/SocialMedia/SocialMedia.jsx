import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import linkedinLogo from '../../assets/icon/linkedin.png'
import githubLogo from '../../assets/icon/github.png'
import twitterLogo from '../../assets/icon/twitter.png'
import dribbbleLogo from '../../assets/icon/dribbble.png'

const SocialMedia = () => {
  const location = useLocation()

  const social = [
    {
      image: linkedinLogo,
      alt: 'linkedin',
      link: 'https://www.linkedin.com/in/luthfinoer/'
    },
    {
      image: githubLogo,
      alt: 'github',
      link: 'https://github.com/LuthfiDbz'
    },
    {
      image: twitterLogo,
      alt: 'twitter',
      link: 'https://twitter.com/THF_Concept'
    },
    {
      image: dribbbleLogo,
      alt: 'dribbble',
      link: 'https://dribbble.com/LuthfiNoer'
    }
  ]

  return (
    <div className="relative hidden lg:block">
      <div className="fixed bottom-0 flex items-center justify-between ms-8">
        <ul data-aos="flip-left" className='text-on-primary width-24 flex flex-col justify-center items-center gap-4'>
          {social.map((soc, index) => {
            return (
              <li key={index}>
                <Link to={soc.link} target='_blank' ><img src={soc.image} alt={soc.alt} className='w-8' /></Link>
              </li>
            )
          })}
          <div className='border-primary border-3 rounded-b-lg w-0 mt-50 h-16 mt-2 rounded-2xl'></div>
        </ul>
        {/* <hr className='rotate-90 mt-12 text-primary border-2 rounded-2xl w-12 bg-on-secondary' /> */}
      </div>
    </div>
  )
}

export default SocialMedia