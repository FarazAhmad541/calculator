import './App.css'
import Buttons from './components/buttons'

function App() {
  return (
    <main className='w-3/4 md:w-3/6 h-20'>
      <input
        type='text'
        className='bg-slate-900 text-white p-7 text-2xl w-full text-right'
      />
      <div className='grid grid-cols-4 border-collapse '>
        <Buttons />
      </div>
    </main>
  )
}

export default App
