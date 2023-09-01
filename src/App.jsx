import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/header/header'
import GeneratorPart from './components/GeneratorPart/password-generator-part'
import Container from './components/Container/container'

 const App =  () => {

 
  return (
  
    <div>
     <Header/>
     <GeneratorPart/>
     <Container/>
    </div>

  )
  }
export default App
