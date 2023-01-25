import { Link } from 'react-router-dom'
import '../Styles/Login.css'

import Union from "../images/Union.png"
import lendsqr from "../images/lendsqr.png"
import pablo from "../images/pablo.jpg"
function Login() {
  return (
    <div className="enclose">
      <div className='login'>
          <section className='sec'>
              <div className='sec-header'>
                  <img src={Union} alt="" className='logo' />
                  <img src={lendsqr} alt="" className='lendsqr'/>
              </div>

              <img src={pablo} alt="" className='pablo'/>
          </section>

          <section className='form-section'>
              <h3 className='welcome'>Welcome!</h3>
              <p className='p'>Enter details to login.</p>

              
                <input type="email" placeholder='Email' className='input-email' />
                  
                <input type="password" placeholder='Password' className='input-pass'/>
              <p className='show'>SHOW</p>
              <p className='a'>FORGOT PASSWORD</p>
              <Link to="/Landing" className='btn-link'>
                  <button >LOG IN</button>
              </Link>
                  
              
              
                  
                  
              
          </section>
    </div>

      <div className='sm-login'>
          <section className=''>
              <div className='sm-logo'>
                  <img src={Union} alt="" className='logo' />
                  <img src={lendsqr} alt="" className='lendsqr'/>
              </div>

              <img src={pablo} alt="" className='sm-pablo'/>
          </section>

          <section className='sm-form-section'>
              <h3 className='welcome'>Welcome!</h3>
              <p className='p'>Enter details to login.</p>

              
                <input type="email" placeholder='Email' className='sm-input-email' />
                  
                <input type="password" placeholder='Password' className='sm-input-pass'/>
              <p className='sm-link'
              >FORGOT PASSWORD</p>
              <Link to="/Landing" className='sm-btn-link'>
                  <button >LOG IN</button>
              </Link>
                  
              
              
                  
                  
              
          </section>
    </div>
    </div>
      
  )
}

export default Login