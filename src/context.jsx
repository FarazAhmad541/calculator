import { createContext, useReducer } from 'react'
const LogicContext = createContext()

// eslint-disable-next-line react/prop-types
function LogicContextProvider({ children }) {
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
      case 'CLEAR': {
        return {
          ...initial_state,
        }
      }
      case 'TOGGLE SIGN': {
        return {
          ...state,
          current_value:
            state.current_value === 0 || state.current_value === ''
              ? '-0'
              : state.current_value * -1,
        }
      }
      case 'INSERT DECIMAL': {
        return {
          ...state,
          current_value: !state.current_value.includes('.')
            ? state.current_value + '.'
            : state.current_value,
        }
      }
      case 'OPERATION': {
        if (state.operation) {
          return {
            ...state,
            operation: action.payload,
          }
        } else {
          return {
            current_value: '',
            prev_value: state.current_value,
            operation: action.payload,
          }
        }
      }
      case 'EVALUATE': {
        switch (state.operation) {
          case '+': {
            return {
              ...state,
              current_value:
                Number(state.current_value) + Number(state.prev_value),
            }
          }
          case '-': {
            return {
              ...state,
              current_value:
                Number(state.prev_value) - Number(state.current_value),
            }
          }
          case '×': {
            return {
              ...state,
              current_value:
                Number(state.current_value) * Number(state.prev_value),
            }
          }
          case '÷': {
            return {
              ...state,
              current_value:
                Number(state.prev_value) / Number(state.current_value),
            }
          }
          case '%': {
            return {
              ...state,
              current_value:
                (Number(state.prev_value) * Number(state.current_value)) / 100,
            }
          }
        }
      }
    }
  }
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
    <LogicContext.Provider value={{ state, handleButtonClick }}>
      {children}
    </LogicContext.Provider>
  )
}

export { LogicContext, LogicContextProvider }
