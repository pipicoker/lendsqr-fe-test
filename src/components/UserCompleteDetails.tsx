import {useEffect, useState} from 'react'
import '../Styles/UserCompleteDetails.css'

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

const UserCompleteDetails = ({ user }: Props) => {
 
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  const [localUser, setLocalUser] = useState<User | null>(null);

  useEffect(() => {
      const userString = localStorage.getItem("user");
      if(userString) {
          const user = JSON.parse(userString);
          setLocalUser(user);
      }
  }, []);
  return (
    <div>
      
        {
          localUser === null || user === undefined ?
            <p>Loading....</p>
            :
        
          
            
          <div className='UserCompleteDetails'>
            <div className="personal-information">
              <h4>Personal Information</h4>
              <div>
                <div className='personal-container'>
                  <div>
                    <p className='personal-title'>Full Name</p>
                    <p className='personal-value' >{localUser.profile.firstName} {localUser.profile.lastName}</p>
                  </div>

                  <div>
                    <p className='personal-title'>phone number</p>
                    <p className='personal-value' >{localUser.phoneNumber}</p>
                  </div>

                  <div>
                    <p className='personal-title'>email address</p>
                    <p className='personal-value' >{localUser.email} </p>
                  </div>

                  <div>
                    <p className='personal-title'>bvn</p>
                    <p className='personal-value' >{localUser.profile.bvn} </p>
                  </div>

                  <div>
                    <p className='personal-title'>gender</p>
                    <p className='personal-value' >{localUser.profile.gender}</p>
                  </div>

                </div>

                <div className='personal-container' >
                  <div>
                    <p className='personal-title'>marital status</p>
                    <p className='personal-value' >Single</p>
                  </div>
                  <div>
                    <p className='personal-title'>children</p>
                    <p className='personal-value' >None</p>
                  </div>
                  <div>
                    <p className='personal-title'>type of residence</p>
                    <p className='personal-value' >Parent's apartment</p>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="personal-information">
              <h4>Education and Employment</h4>
              <div>
                <div className='education-container'>
                  <div>
                    <p className='personal-title'>level of education</p>
                    <p className='personal-value' >{localUser.education.level}</p>
                  </div>

                  <div>
                    <p className='personal-title'>employment status</p>
                    <p className='personal-value' >{localUser.education.employmentStatus}</p>
                  </div>

                  <div>
                    <p className='personal-title'>sector of employment</p>
                    <p className='personal-value' >{localUser.education.sector} </p>
                  </div>

                  <div>
                    <p className='personal-title'>duration of employment</p>
                    <p className='personal-value' >{localUser.education.duration} </p>
                  </div>


                </div>

                <div className='education-container' >
                  <div>
                    <p className='personal-title'>office email</p>
                    <p className='personal-value' >{localUser.education.officeEmail }</p>
                  </div>
                  <div>
                    <p className='personal-title'>monthly income</p>
                    <p className='personal-value' >{localUser.education.monthlyIncome}</p>
                  </div>
                  <div>
                    <p className='personal-title'>loan payment</p>
                    <p className='personal-value' >{localUser.education.loanRepayment}</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="personal-information">
              <h4>Socials</h4>
              <div>
                <div className='social_guarantor-container'>
                  <div>
                    <p className='personal-title'>twitter</p>
                    <p className='personal-value' >{localUser.socials.twitter}</p>
                  </div>

                  <div>
                    <p className='personal-title'>facebook</p>
                    <p className='personal-value' >{localUser.socials.facebook}</p>
                  </div>

                  <div>
                    <p className='personal-title'>instagram</p>
                    <p className='personal-value' >{localUser.socials.instagram} </p>
                  </div>



                </div>

              </div>
              
            </div>

            <div className="personal-information guarantor">
              <h4>Guarantor</h4>
              <div>
                <div className='social_guarantor-container'>
                  <div>
                    <p className='personal-title'>full name</p>
                    <p className='personal-value' >{localUser.guarantor.firstName} {localUser.guarantor.lastName}</p>
                  </div>

                  <div>
                    <p className='personal-title'>phone number</p>
                    <p className='personal-value' >{localUser.guarantor.phoneNumber}</p>
                  </div>

                  <div>
                    <p className='personal-title'>email address</p>
                    <p className='personal-value' >{localUser.guarantor.address} </p>
                  </div>

                  <div>
                    <p className='personal-title'>relationship</p>
                    <p className='personal-value' >{localUser.guarantor.gender} </p>
                  </div>

                </div>

              </div>
              
            </div>

            {/* <div className="personal-information">
              <div>
                <div className='social_guarantor-container'>
                  <div>
                    <p className='personal-title'>full name</p>
                    <p className='personal-value' >{user.guarantor.firstName} {user.guarantor.lastName}</p>
                  </div>

                  <div>
                    <p className='personal-title'>phone number</p>
                    <p className='personal-value' >{user.guarantor.phoneNumber}</p>
                  </div>

                  <div>
                    <p className='personal-title'>email address</p>
                    <p className='personal-value' >{user.guarantor.address} </p>
                  </div>

                  <div>
                    <p className='personal-title'>relationship</p>
                    <p className='personal-value' >{user.guarantor.gender} </p>
                  </div>



                </div>

              </div>
              
            </div> */}

          </div>
            
        }
    
    </div>
    
  )
}

export default UserCompleteDetails
