import React from 'react'
import UserCompleteDetails from '../components/UserCompleteDetails'
import UserGeneral from '../components/UserGeneral'
import UserHeader from '../components/UserHeader'

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

const UserGeneralDetails = ({user}: Props) => {
  return (
    <div>
      
          <UserHeader />
      <UserGeneral user={user} />
          <UserCompleteDetails user={user}/>

    </div>
  )
}

export default UserGeneralDetails