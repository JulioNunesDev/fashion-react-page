
import './App.css'
import {GrCart} from 'react-icons/gr'
import {CgMenuGridR} from 'react-icons/cg'
import muie from './assets/muieM.svg'
import cart from './assets/cart.png'
function App() {


  return (
    <div className="App">
      <div className="conatiner-header">

      <header>
          <div className="btn">
            <h1><CgMenuGridR /></h1>
          </div>
        <nav>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a className='text' href="">PRODUCTS</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </nav>
        <div className="cart">
          <GrCart />
        </div>
      </header>
          <main>
            <img src={muie} alt="mulher fashion" />
            <article>
              <h1>FASHION </h1>
              <h1 className='colorTxt'>MADE </h1>
              <h1>SIMPLE. </h1>
              <div className="cart--btn">
              <button><img src={cart} alt="" /> ADD TO CART</button>
             </div>
            </article>
           
          </main>
      </div>
    </div>
  )
}

export default App
