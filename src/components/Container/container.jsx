import './container.css'

const Container = () => {
    return (
       <div className='main'>
        <div className='text-number'>
            <h2 className='character-length'>Character Length</h2>
            <input className='numbers' type='text'></input>
        </div>
        <input className="range" type='range'></input>
        <div className='boxes'>
          <div className='first'>
            <div className='box'></div>
            <h2 className='text'>Include Uppercase Letters</h2>
          </div>
          <div className='second'>
          <div className='box'></div>
            <h2 className='text'>Include Lowercase Letters</h2>
          </div>
          <div className='third'>
          <div className='box'></div>
            <h2 className='text'>Include Numbers</h2>
          </div>
          <div className='fourth'>
        <div className='box'></div>
            <h2 className='text'>Include Symbols</h2>
          </div>
        </div>
        <div className="dark-box">
            <h2 className='strength'>STRENGTH</h2>
            <div className="text-and-scale">
                <h2 className='scale'>TOO WEAK!</h2>
                <div className="colored-boxes a" ></div>
                <div className="colored-boxes b" ></div>
                <div className="colored-boxes c"></div>
                <div className="colored-boxes d"></div>
            </div>
        </div>
        <button className="generate-part">
            <h2 className='generate'>GENERATE</h2>
            <img className='icon-arrow' src='./assets/icon-arrow-rights.svg'></img>
        </button>
       </div>
        
  )
}
export default Container