import React from 'react'
import '../Styles/BorrowerNav.css'

import down from '../images/down.png'
import briefcase1  from '../images/briefcase1.png'
import home1  from '../images/home1.png'
import { INavdata } from "../pages/Landing"


interface borrowerProps {
    navData: INavdata[],
    borrowerNav: boolean
}
  
const BorrowerNav: React.FC<borrowerProps> = (props) => {
  return (
      <aside>
          

          <div className={props.borrowerNav ? "show" : "hidden"}>
                    <div className='div'>
                  <img src={briefcase1} alt="" className='icon'/>
                    <h4 className='heading'>Switch Organization</h4>
                    <img src={down} alt="" />
                </div>
                <div className='div div2'>
                  <img src={home1} alt="" className='icon'/>
                    <h5 className='heading'>Dashboard</h5>
                </div>
                <div >
                    {props.navData.map((data, index) => (
                        <div key={index}>
                            <h3>{data.category}</h3>

                            <div className='items'>
                                {data.details.map((detail, i) => (
                                    <div key={i} className="div">
                                     
                                        <img src={detail.icon} alt="" className='icon'/>
                                            <p className='heading'>{detail.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div> 
          </div>
          
    </aside>
  )
}

export default BorrowerNav