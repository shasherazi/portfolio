import './App.css'
import globalPlaylistScreenshot from './assets/screenshots/globalPlaylist.png'
import laptopChannelScreenshot from './assets/screenshots/laptopChannel.png'
import blogScreenshot from './assets/screenshots/blog.png'
import countriesIndexScreenshot from './assets/screenshots/countriesIndex.png'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase, SiJavascript, SiRuby, SiRubyonrails, SiTypescript } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { AiFillApi } from 'react-icons/ai'
import { Project } from './components/Project'

const App = () => {
  return (
    <div className='app flex flex-col py-4 px-3'>
      <div className='intro mb-5'>
        <div className='intro-name-bg bg-black h-full w-0'>
          <h1 className='intro-name text-white relative mix-blend-difference font-bold text-3xl mb-2 p-3'>Syed Hassan Askri</h1>
        </div>
        <p className='bio leading-5 tracking-wide'>
          <strong>Full-stack developer</strong> experienced in JavaScript, React, Redux, Ruby on Rails, Linux, and chess.
          Open to new opportunities.
        </p>
      </div>

      <div className='project'>
        <h2 className='font-bold text-2xl mb-2'>Projects</h2>
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
    </div>
  )
}

export default App
