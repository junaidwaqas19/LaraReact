import React ,{useState,useEffect}from 'react'
import PageContent from '../../../components/adminComponent/PageContent'
import Table from '../../../components/adminComponent/commonComponent/Table';
import { NewspaperIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';
import { UserApi } from '../../../api/Admin/UserApi';

const UserList = () => {
  
  const navigate= useNavigate();
  const [userList,setUserList] = useState()
  
  const getUsers = async ()=>{
        const data = await UserApi.UserList()
        return setUserList(data.data);
  }
  console.log(userList);
  useEffect(()=>{
    getUsers();
  },[]);
  const table = {
    headers: [
      { label: 'Profile Photo',  key: 'Image' },
      { label: 'Name',   key: 'name' },
      { label: 'Email',  key: 'email' },
      { label: 'User Roles',  key: 'Roles' },
      { label: 'STATUS', key: 'status' }
    ],
  };
  const buttons = [
    { key: "pdf", label: "PDF", type: "pdf", size: "small" , onClick:'pdf'},
    { key: "excel", label: "Excel Export", type: "excel", size: "small", onClick:'export'},
    { key: "add", label: "Add User", type: "add", size: "small", btnClick:() =>navigate('/users/new') }

  ];
  const linkIcon = ['edit', 'delete', 'view'];
  const path = { edit: '/editUser', view: '/edit/dashboard' };

  return (
    <div>
      
        <PageContent
             title={'User List'}
             icon={<NewspaperIcon className='w-8 h-8 mr-2' />}
             buttons={buttons}       
        >
              <Table
                headers={table.headers}
                data={userList}
                linkIcon={linkIcon}
                onEditClick={()=> alert('edit')}
                onDeleteClick={()=> alert('delete')}
                getUsers={getUsers}
              />


        </PageContent>
    </div>
  )
}

export default UserList
