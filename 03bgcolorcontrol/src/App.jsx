import { useState } from 'react'
import buttons from './utils/bg_colors'

function App() {
  const [bgColor, setBgColor] = useState('bg-blue-400');

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <div className="fixed rounded-xl bottom-10 left-1/2 -translate-x-1/2 px-4 z-40 bg-white p-1">
        {buttons.map(button => {
          return (
            <button 
              key={button.id} 
              className={button.colorClass}
              onClick={() => setBgColor(button.colorClass)}
            >
              {button.color}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default App
