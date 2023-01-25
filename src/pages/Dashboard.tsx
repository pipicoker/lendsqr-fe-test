import React from 'react'
import Users from '../components/Users'
import UsersDetails from '../components/UsersDetails'

interface FuncProps{
  GetUserId(data: string): void
}
const Dashboard : React.FC<FuncProps> = ({GetUserId}) => {
  return (
    <div>
      <Users />
      <UsersDetails GetUserId={GetUserId} />
    </div>
  )
}

export default Dashboard

