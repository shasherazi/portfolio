import './App.css'
import globalPlaylistScreenshot from './assets/screenshots/globalPlaylist.png'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase, SiTypescript } from 'react-icons/si'
import { Project } from './components/Project'

const App = () => {
  return (
    <div className='app flex flex-col py-4 px-3'>
      <div className='intro mb-5'>
        <h1 className='font-bold text-3xl mb-2 p-3 bg-black text-white mr-[-12px]'>Syed Hassan Askri</h1>
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
        </div>
      </div>
    </div>
  )
}

export default App
