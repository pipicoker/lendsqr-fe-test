import React from 'react'

import '../Styles/TopNav.css'

import { RxHamburgerMenu } from 'react-icons/rx';


import Union from "../images/Union.png"
import lendsqr from "../images/lendsqr.png"
import searchicon from "../images/searchicon.png"
import notification from "../images/notification.png"
import user from "../images/user.png"


interface borrowerProps {
    borrowerNav: boolean,
    setBorrowerNav: (newVal: boolean) => void
}

const TopNav: React.FC<borrowerProps> = (props) => {

  const ToggleBorrowerNav = () => {
       props.setBorrowerNav(!props.borrowerNav);
  }
  
  return (
    <nav>
      <div className='hamburger-div'>
        <div className="logo">
              <img src={Union} alt="logo" className='union'/>
              <img src={lendsqr} alt="logo" className='lendsqr'/>
        </div>
        
        <RxHamburgerMenu data-testid="hamburger" className='hamburger' onClick={ToggleBorrowerNav}/>

      </div>
          

          <input type="search" placeholder='search for anything' />
          <div className='search-bg'>
            <img src={searchicon} alt="" className='searchicon'/>
          </div>
        
          
              < p className='docs'>Docs</p>
          <img src={notification} alt="notification" className="notification" /> 
          
      <img src={user} alt="user-img" className="user-img" />


        <p className='user-name'>Adedeji</p>
        {/* <img src={arr} alt="arr" className="arr" /> */}

          
          
          
    </nav>
  )
}

export default TopNav