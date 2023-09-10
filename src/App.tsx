import './App.css'
import globalPlaylistScreenshot from './assets/screenshots/globalPlaylist.png'
import laptopChannelScreenshot from './assets/screenshots/laptopChannel.png'
import blogScreenshot from './assets/screenshots/blog.png'
import countriesIndexScreenshot from './assets/screenshots/countriesIndex.png'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase, SiJavascript, SiRuby, SiRubyonrails, SiTypescript } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { AiFillApi } from 'react-icons/ai'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Project } from './components/Project'
import { skills } from './assets/skills'
import { useState } from 'react'

export const App = () => {
  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    document.body.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  shuffle(skills)

  return (
    <div className={`app flex flex-col py-4 px-6 sm:px-24 md:px-24 ${darkMode ? 'dark' : ''}`}>
      <div className='intro mb-10'>
        <div className='intro-name-bg bg-black dark:bg-white h-full w-0 ml-[-24px] sm:ml-[-96px] md:ml-[-96px]'>
          <h1 className='intro-name text-white relative mix-blend-difference font-bold text-3xl mb-2 p-3 pr-8 md:text-4xl'>Syed Hassan Askri</h1>
          <div
            onClick={handleDarkMode}
            className='dark-mode-toggle absolute right-2 cursor-pointer top-8 mix-blend-difference text-3xl md:text-4xl text-white'
          >
            {
              darkMode ?
                <MdLightMode />
                :
                <MdDarkMode />
            }
          </div>
        </div>
        <p className='bio leading-5 tracking-wide md:text-lg'>
          <strong>Full-stack developer</strong> experienced in JavaScript, React, Redux, Ruby on Rails, Linux, and chess.
          Open to new opportunities.
        </p>
      </div>

      <div className='projects'>
        <h2 className='font-bold text-2xl mb-4 md:text-3xl'>Projects</h2>
        <div className='project-list'>
          <Project
            title='Global Playlist'
            description='Global Playlist is a website where anyone can add any song to a playlist.
            This means you can discover new music worldwide or just rickroll your friends.
            The project is open to anyone, so feel free to add your favorite songs and
            see what others are listening to.'
            image={globalPlaylistScreenshot}
            imageAlt='Global Playlist'
            techUsed={[FaReact, SiTypescript, FaPython, SiFirebase]}
            liveLink='https://global-playlist.vercel.app/'
            githubLink='https://github.com/shasherazi/globalPlaylist'
          />

          <Project
            title='Laptop Channel'
            description='Streamlined convenience at your fingertips!
            Our platform empowers customers to reserve laptops in their preferred city
            and quantity easily. Experience hassle-free access to the technology you need,
            exactly when and where you need it.'
            image={laptopChannelScreenshot}
            imageAlt='Laptop Channel'
            techUsed={[FaReact, SiRubyonrails, SiRuby, BiLogoPostgresql]}
            liveLink='https://laptop-ecommerce.onrender.com/'
            githubLink='https://github.com/shasherazi/laptops-ecommerce'
          />

          <Project
            title='Blog'
            description='Blog is a personal blog app which supports posts, comments, and likes. Built with Rails.'
            image={blogScreenshot}
            imageAlt='Blog'
            techUsed={[SiRubyonrails, SiRuby, BiLogoPostgresql]}
            liveLink={undefined}
            githubLink='https://github.com/shasherazi/blog'
          />

          <Project
            title='Countries Index'
            description="Countries Index is a web application that allows users to search
            for countries and get information about them. The information includes the
            country's name, capital, population, area, and flag and list of time zones.
            You can also filter the countries by continent."
            image={countriesIndexScreenshot}
            imageAlt='Countries Index'
            techUsed={[FaReact, SiJavascript, AiFillApi]}
            liveLink='https://shasherazi.github.io/countriesIndex/'
            githubLink='https://github.com/shasherazi/countriesIndex'
          />
        </div>
      </div>
      <div className='skills mb-20'>
        <h2 className='font-bold text-2xl mb-2 md:text-3xl'>Skills</h2>
        <p className='mb-2 md:text-lg'> Here are some of the skills I have acquired over the years in no particular order:</p>
        <div className='skills-list flex flex-wrap gap-1 md:text-lg'>
          {skills.map((skill, index) => (
            <span key={index} className='skill bg-black text-white p-2'>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className='contact mb-2'>
        <h2 className='font-bold text-2xl mb-2 md:text-3xl'>Contact</h2>
        <ul className='contact-list md:text-lg'>
          <li className='contact-item'>
            <a
              href='mailto:hassanrandomz@gmail.com'
              className='contact-link underline font-bold'
              target='_blank'
              rel='noreferrer'
            >
              hassanrandomz@gmail.com
            </a> on email
          </li>
          <li className='contact-item'>
            <a
              href='https://github.com/shasherazi/'
              className='contact-link underline font-bold'
              target='_blank'
              rel='noreferrer'
            >
              shasherazi
            </a> on GitHub
          </li>
          <li className='contact-item'>
            <a
              href='https://www.linkedin.com/in/shasherazi/'
              className='contact-link underline font-bold'
              target='_blank'
              rel='noreferrer'
            >
              shasherazi
            </a> on LinkedIn
          </li>
          <li className='contact-item'>
            <a
              href='https://twitter.com/shasherazi'
              className='contact-link underline font-bold'
              target='_blank'
              rel='noreferrer'
            >
              shasherazi
            </a> on Twitter
          </li>
        </ul>
      </div>
    </div>
  )
}
