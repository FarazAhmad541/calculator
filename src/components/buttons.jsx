import clsx from 'clsx'
import { useContext } from 'react'
import { LogicContext } from '../context'
const buttons = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
]

export default function Buttons() {
  const { handleButtonClick } = useContext(LogicContext)
  return (
    <>
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
    </>
  )
}
