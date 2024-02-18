import React, { useState } from 'react'
import Quiz from './Components/Quiz';

const App = () => {
  const [currQueIdx, setCurrQueIdx] = useState(0);

  return (
    <div>
      <Quiz currQueIdx={currQueIdx} setCurrQueIdx={setCurrQueIdx} />
    </div>
  )
}

export default App