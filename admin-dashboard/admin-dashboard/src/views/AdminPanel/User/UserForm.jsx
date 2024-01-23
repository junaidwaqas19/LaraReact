import React from 'react'
import PageContent from '../../../components/adminComponent/PageContent'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'
import UserRegisrterForm from '../../../components/adminComponent/UserComponent/UserRegisrterForm'
import { useParams } from 'react-router';
const UserForm = () => {

  const navigate = useNavigate()
  const  buttons=[{ key: "list", label: "User List", type: "list", size: "sm", btnClick: ()=> navigate('/users')}];
  const {id} = useParams();
  
  return (
    
       <PageContent title={id?'Update':'Add'+'User'} icon={<UserCircleIcon className='w-8 h-8 mr-2' />} buttons={buttons}>
          <UserRegisrterForm id={id}/>
      </PageContent>
  )
}

export default UserForm
