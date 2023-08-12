import './App.css'

const App = () => {
  return (
    <div className='app flex flex-col py-5 px-3'>
      <div className='intro mb-5'>
        <h1 className='font-bold text-3xl mb-2'>Syed Hassan Askri</h1>
        <p className='leading-5 tracking-wide'>
          <strong>Full-stack developer</strong> experienced in JavaScript, React, Redux, Ruby on Rails, Linux, and chess.
          Open to new opportunities.
        </p>
      </div>

      <div className='project'>
        <h2 className='font-bold text-2xl mb-2'>Projects</h2>
      </div>
    </div>
  )
}

export default App
