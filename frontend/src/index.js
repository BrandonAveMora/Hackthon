import React from 'react'
import ReactDOM from 'react-dom'

function HolaMundo() {
  return(
    <div>
      <h1>Hola Mundo</h1>
    </div>
  )
}

ReactDOM.render(<HolaMundo/>, document.getElementById('root'))