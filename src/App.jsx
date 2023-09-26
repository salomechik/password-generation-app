import { useState } from 'react'
import './App.css'
import Header  from './components/header/header'
import GeneratorPart from './components/GeneratorPart/password-generator-part'
import Container from './components/Container/container'

 const App =  () => {

  const [password, setPassword] = useState("");
  return (
  
    <>
     <Header/>
     <GeneratorPart password={password}/>
     <Container setPassword={setPassword}/>
    </>

  )
  }
export default App
