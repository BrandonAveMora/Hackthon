import React from 'react'
import ReactDOM from 'react-dom'
import LoginComponent from './LoginComponent'

function App() {
  return(
    <div>
      <LoginComponent/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))