import '../Styles/UserGeneral.css'

import userpix from "../images/userpix.png"
import star from "../images/star.png"
import star2 from "../images/star2.png"

interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    gender: string;
    address: string;
  };
  accountBalance: number;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: number[];
    loanRepayment: number;
  };
  id: number;
}

interface Props {
    user: User | null | undefined;

}

const UserGeneral = ({user}: Props) => {
  
  
  return (
    <div className='section'>
      <div>
        {
          user === null || user === undefined ?
            <p>Loading....</p>
            :

            <div >
              <div className='box'>
                <div className='sect'>
                  <div className="user-pix">
                    <img src={userpix} alt="" />
                  </div>
                  <div className="name">
                    <div className='first-last'>
                      <p>{user.profile.firstName} {user.profile.lastName}</p>
                      <p className='act-num'>{user.accountNumber}</p>
                      </div>
                  </div>
                </div>
              
                
                <div className='usersTier'>
                  <p>User's Tier</p>
                  <div className='star-div'>
                    <img src={star} alt="" />
                    <img src={star2} alt="" className='star'/>
                    <img src={star2} alt="" />
                  </div>
                </div>

                <div className="act-details">
                  <p className="act-balance">${user.accountBalance}</p>
                  <p className='bank'>{user.profile.bvn}/Providus Bank</p>
                </div>
              </div>
              

              <div className="details-buttons ">

                <p className='first-detail-btn'>General Details</p>
                <p className='detail-btn'>Documents</p>
                <p className='detail-btn'>Bank Details</p>
                <p className='detail-btn hide'>Loans</p>
                <p className='detail-btn hide'>Savings</p>
                <p className='detail-btn hide'>App and System</p>
              </div>
            </div>

            
        }
    </div>
      
      
    </div>

    
  )

   
  
}

export default UserGeneral

