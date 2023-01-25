import  '../Styles/UserHeader.css'


import back from "../images/back.png"
const UserHeader = () => {
    
  return (
    <header>
      
       <a>
          <img src={back} alt="" />
                Back to Users
      </a>
      
      <div className='navigation'>
        <h4>User Details</h4>

        <div className="navigation-buttons">
          <button className='btn-1'>blacklist user</button>
          <button className='btn-2'>activate user</button>
        </div>
      </div>
      
    </header>
  )
}

export default UserHeader
