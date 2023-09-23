import './container.css'
import arrowImg from "../../assets/icon-arrow-right.svg"
import { useState } from 'react'




const Container = () => {
const [rangeValue, setRangeValue] = useState (10)
const rangeHandler = (e) => {
   setRangeValue(e.target.value)
}
const changeBackgroundColor = () =>{
  setBackgroundColor('#A4FFAF')
}

const uppercaseHandler = () => {

}

const LowercaseHandle = () => {

}
const numbersHandle = () => {

}
const symbolsHandle = () => {

}
    return ( 
       <div className='main'> 
        <div className='text-number'>
            <h2 className='character-length'>Character Length</h2>
            <h1 className='numbers'>{rangeValue}</h1>
        </div>
        <input className="range" type='range' max={20} onChange={rangeHandler} value={rangeValue} />
        <div className='boxes'>
          <div className='first'>
            <input type="checkbox" onClick={changeBackgroundColor} className="first-box"/>
            <h2 className='text'>Include Uppercase Letters</h2>
          </div>
          <div className='second'>
          <input type="checkbox"  className="second-box" />
            <h2 className='text'>Include Lowercase Letters</h2>
          </div>
          <div className='third'>
          <input type="checkbox"  className="third-box" />
            <h2 className='text'>Include Numbers</h2>
          </div>
          <div className='fourth'>
          <input type="checkbox"  className="fourth-box" />
            <h2 className='text'>Include Symbols</h2>
          </div>
        </div>
        <div className="dark-box">
            <h2 className='strength'>STRENGTH</h2>
            <div className="text-and-scale">
                <h2 className='scale'></h2>
                <div className="colored-boxes a" ></div>
                <div className="colored-boxes b" ></div>
                <div className="colored-boxes c"></div>
                <div className="colored-boxes d"></div>
            </div>
        </div>
        <button className="generate-part">
            GENERATE
            <svg className='icon-arrow' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
        </button>
       </div>
        
  )
}
export default Container