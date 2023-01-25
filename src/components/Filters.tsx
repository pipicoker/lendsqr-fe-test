
import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../Styles/UsersDetails.css'

import Vector from "../images/Vector.png"
import Vector2 from "../images/Vector2.png"
import down from "../images/down.png"
import blacklist from "../images/blacklist.png"
import activate from "../images/activate.png"

import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineRemoveRedEye} from 'react-icons/md'


interface IUserResponse {
  [index: number]: {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
      loanRepayment: string;
      monthlyIncome: string[];
      officeEmail: string;
    };
    email: string;
    guarantor: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      address: string;
      gender: string;
    };
    id: string;
    lastActiveDate: string;
    orgName: string;
    phoneNumber: string;
    profile: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      address: string;
      avatar: string;
      bvn: string;
      currency: string;
      gender: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    userName: string;
  }
}

interface IPageChangeEvent {
    selected: number;
}

const Filters = () => {
    const [data, setData] = useState<IUserResponse>();
    const [error, setError] = useState<string>();

    // const [currentPage, setCurrentPage] = useState(1)
    // const [postPerPage] = useState(9)
    // const pageNumbers = []


     useEffect(() => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((responseData) => {
            setData(responseData);
            console.log(responseData);
            
        })
        .catch((error) => {
            setError(error);
        });
     }, []);
    

  



    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems =data? Object.values(data).slice(itemOffset, endOffset) : 0;
  const pageCount =data? Math.ceil(Object.values(data).length / itemsPerPage) : 0;

  // Invoke when user click to request another page.
  const handlePageClick = (event: IPageChangeEvent) => {
    const newOffset =data? (event.selected * itemsPerPage) % Object.values(data).length : 0;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    (
      <>
        {error ? <div> Error: {error}</div> :
          <div data-testid='users-details'>
        <div className='main-wrap'>
            <main>  
              <div className='top-heading'>
                  <div className='heading'>
                      <h5>organization</h5>
                      <img src={Vector} alt="" />
                  </div>
                  <div className='heading username'>
                      <h5>username</h5>
                      <img src={Vector} alt="" />
                  </div>
                  <div className='heading email'>
                      <h5>email</h5>
                      <img src={Vector} alt="" />
                  </div>
                  <div className='heading phone'>
                      <h5>phone number</h5>
                      <img src={Vector} alt="" />
                  </div>
                  <div className='heading data'>
                      <h5>date joined</h5>
                      <img src={Vector} alt="" />
                  </div>
                  <div className='heading status'>
                      <h5>status</h5>
                      <img src={Vector} alt="" />
                  </div>
              </div>

              <div className='form-container'>
                  <form className='form'>
                      <div className='wrap'>
                          <label >Organization</label>
                          <div>
                              <input type="text" placeholder='Select' />
                              <img src={down} alt="icon" className='down' />
                          </div>
                          
                      </div>

                      <div className='wrap wrap-margin'>
                        <label >Username</label>
                        <input type="text" placeholder='user'/>  
                      </div>

                      <div className='wrap wrap-margin'>
                        <label >Email</label>
                        <input type="email" placeholder='email'/>  
                      </div>

                      <div className='wrap wrap-margin'>
                        <label >Date</label>
                        <div>
                              <input type="text" placeholder='Select' />
                              <FaRegCalendarAlt  className='down' />
                          </div>  
                      </div>

                      <div className='wrap wrap-margin'>
                        <label >Phone number</label>
                        <input type="tel" placeholder='Phone number' />  
                      </div>
                      
                      <div className='wrap wrap-margin'>
                        <label >Status</label>
                        <div>
                              <input type="text" placeholder='Select' />
                              <img src={down} alt="icon" className='down' />
                          </div>  
                      </div>

                      <div className='button-margin'>
                          <button className='reset-btn'>Reset</button>
                          <button className='filter-btn'>Filter</button>
                      </div>
                  
              </form>
              </div>
              

          <div className='wrapper'>
              {currentItems && Object.values(currentItems).map((user, index) => (
                  <Link to="./UserGeneralDetails" key={index} className="user-row bottom-border">
                      <p>{user.orgName}</p>
                      <p className='username'>{user.userName}</p>
                      <p className='email'>{user.email}</p>
                      <p className='phone'>{user.phoneNumber}</p>
                      <p className='data'>{user.createdAt}</p>
                      <div className='status'>
                          <p>inactive</p>
                      </div>
                      <img src={Vector2} alt="" />
                </Link>  
              ))}
            </div>
          
            
          </main>
        
      
        </div>

        <div className='popup'>
              <div className='wrap'>
                  <MdOutlineRemoveRedEye className='pix'/>
                  <p>View Details</p>
              </div>
              <div className='wrap'>
                  <img src={blacklist} alt="" />
                  <p>Blacklist User</p>
              </div>
              <div className='wrap'>
                  <img src={activate}  alt="ACTIVATE"/>
                  <p>Activate User</p>
              </div>
            </div>
        
        <ReactPaginate className='pagination'
          data-testid='pagination'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        // renderOnZeroPageCount={null}
                pageLinkClassName="pag-class"
                breakClassName="pag-class"
        nextClassName="nextPrev-btn"
                previousClassName="nextPrev-btn"
                nextLinkClassName="nextPrevLink-btn"
                previousLinkClassName="nextPrevLink-btn"
      />
        
          
          <div className='showing'>
              <p>showing <span>100 <img src={down} alt="icon" className='down' /></span> out of 100 </p>
              
          </div>
      </div>
        }
      </>
          
        
  )
  )
}

export default Filters
