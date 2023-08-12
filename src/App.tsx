import './App.css'
import globalPlaylistScreenshot from './assets/screenshots/globalPlaylist.png'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiFirebase, SiTypescript } from 'react-icons/si'

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
          <div className='global-playlist project-item'>
            <img src={globalPlaylistScreenshot} alt='Global Playlist' />
            <div className='project-item-description'>
              <h2 className='font-bold text-lg'>Global Playlist</h2>
              <div className='tech-used flex text-lg items-center gap-1 mb-2'>
                <span className='font-bold'>Tech used: </span>
                <FaReact />
                <SiTypescript />
                <FaPython />
                <SiFirebase />
              </div>
              <p className='description leading-5 tracking-wide mb-1'>
                Global Playlist is a website where anyone can add any song to a playlist.
                This means you can discover new music worldwide or just rickroll your friends.
                The project is open to anyone, so feel free to add your favorite songs and see
                what others are listening to.
              </p>
              <div className='project-item-links flex gap-2'>
                <a
                  href='https://global-playlist.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  Live
                </a>
                <a
                  href='https://github.com/shasherazi/globalPlaylist'
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
