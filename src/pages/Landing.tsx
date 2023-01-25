import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import BorrowerNav from '../components/BorrowerNav'
import TopNav from '../components/TopNav';
import Dashboard from './Dashboard';
import UsersFilters from './UsersFilters'
import UserGeneralDetails from './UserGeneralDetails';

import userFriends from "../images/userFriends.png"
import users1 from "../images/users1.png"
import sack1 from "../images/sack1.png"
import handshakeregular  from "../images/handshakeregular .png"
import piggybank  from "../images/piggybank.png"
import Group104  from "../images/Group104.png"
import usercheck1  from "../images/usercheck1.png"
import usertimes1  from "../images/usertimes1.png"
import briefcase1  from "../images/briefcase1.png"
import Group  from "../images/Group.png"
import Vector  from "../images/Vector.png"
import icon  from "../images/icon.png"
import galaxy1  from "../images/galaxy1.png"
import usercog1  from "../images/usercog1.png"
import scroll1  from "../images/scroll1.png"
import chartbar2  from "../images/chartbar2.png"
import slidersh  from "../images/slidersh.png"
import badgepercent   from "../images/badgepercent.png"
import clipboardlist   from "../images/clipboardlist.png"


interface INavdata {
  
    category: string;
    details: IDetail[];
}

interface IDetail {
  icon: any;
  title: string;
}
export type { INavdata }


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

const Landing= () => {

  const BorrowerNavData: INavdata[] = [
    {
        category: "customer",
          details: [
              {
                  icon: userFriends,
                  title: "Users"
              },
              {
                  icon: users1,
                  title: "Guarantors"
              },
              {
                  icon: sack1,
                  title: "Loans"
              
            },
            {
                icon: handshakeregular ,
                title: "Decision Models"
            },
            {
                icon: piggybank,
                title: "Savings"
            },
            {
                icon: Group104,
                title: "Loan Requests"
            },
            {
                icon: usercheck1,
                title: "Whitelist"
            },
            {
                icon: usertimes1,
                title: "Karma"
            },
        ]
    },

    {
        category: "businesses",
        details: [
            {
                icon: briefcase1,
                title: "Organization"
            },
            {
                icon: Group104,
                title: "Loan Products"
            },
            {
                icon: Group,
                title: "Saving Products"
            },
            {
                icon: Vector,
                title: "Fees and charges"
            },
            {
                icon: icon,
                title: "Transactions"
            },
            {
                icon: galaxy1,
                title: "Services"
            },
            {
                icon: usercog1,
                title: "Service Account"
            },
            {
                icon: scroll1,
                title: "Settlements"
            },
            {
                icon: chartbar2,
                title: "Reports"
            },
        ]
    },

    {
        category: "settings",
        details: [
            {
                icon: slidersh,
                title: "preferences"
            },
            {
                icon: badgepercent ,
                title: "Fees and pricing"
            },
            {
                icon: clipboardlist,
                title: "Audit Logs"
            }
            
        ]
    }

    
]

    const [id, setId] = useState(parseInt(""))
const [user, setUser] = useState<User | null | undefined>(null);





    
    
    const GetUserId = (data: string) => {
    const number = parseInt(data)
    setId(number)
}
useEffect(() => {
            
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then((responseData) => {
        setUser(responseData);
    })

 }, [id]);

    
    //toggle borrower nav
    const [borrowerNav, setBorrowerNav] = useState<boolean>(false)
    

    

    

  return (
    <div>
      
          <TopNav borrowerNav={borrowerNav} setBorrowerNav={setBorrowerNav} />
          <BorrowerNav navData={BorrowerNavData} borrowerNav={borrowerNav} />

      <Routes>
            <Route path="/" element={<Dashboard GetUserId={GetUserId} />} />
            <Route path="/UsersFilters" element={<UsersFilters />} />
              <Route path="/UserGeneralDetails/*" element={<UserGeneralDetails user={user}/>} />
      </Routes>

    </div>
  )
}

export default Landing
