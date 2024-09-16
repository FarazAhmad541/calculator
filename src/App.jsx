import clsx from 'clsx'
import { useReducer } from 'react'
import './App.css'
import { buttons } from './components/buttons'

const initial_state = {
  current_value: '',
  prev_value: '',
  operation: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD DIGIT': {
      return {
        ...state,
        current_value: state.current_value + action.payload,
      }
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initial_state)

  const handleButtonClick = (button) => {
    if (button === 'AC') {
      dispatch({ type: 'CLEAR' })
    } else if (button === '=') {
      dispatch({ type: 'EVALUATE' })
    } else if (button === '+/-') {
      dispatch({ type: 'TOGGLE SIGN' })
    } else if (button === '.') {
      dispatch({ type: 'INSERT DECIMAL' })
    } else if (['+', '-', '×', '÷', '%'].includes(button)) {
      dispatch({ type: 'OPERATION', payload: button })
    } else {
      dispatch({ type: 'ADD DIGIT', payload: button })
    }
  }
  return (
    <main className='w-3/4 md:w-3/6 h-20'>
      <input
        type='text'
        className='bg-slate-900 text-white p-7 text-2xl w-full text-right'
        readOnly
        value={state.current_value}
      />
      <div className='grid grid-cols-4 border-collapse '>
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className={clsx(
                'p-7 text-4xl border border-slate-400 border-collapse hover:bg-slate-200',
                ['+', '-', '=', '÷', '×'].includes(button) &&
                  'bg-orange-400 text-white hover:bg-orange-500',
                button == '0' && 'col-span-2'
              )}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          )
        })}
      </div>
    </main>
  )
}

export default App
