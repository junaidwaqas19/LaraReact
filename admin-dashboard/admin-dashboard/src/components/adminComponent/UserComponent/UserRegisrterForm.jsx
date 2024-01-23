import React, { useState } from 'react'
import FormInputField from '../../commonComponents/formComponent/FormInputField'
import FormSelectOption from '../../commonComponents/formComponent/FormSelectOption';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router';

const UserRegisrterForm = ({id,}) => {
    const navigate = useNavigate();       
    const [userData, setUserData] = useState({
      ...(id ? { id } : {}),
      name: '',
      email: '',
      password: '',
      designation: '',
    });
  
    const [userError, setUserError] = useState({
      nameError: '',
      emailError: '',
      passwordError: '',
      designationError: '',
    });
         
        

    const onsubmit =(ev) =>{
          ev.preventDefault();
          const payload = {...userData};
           console.log(payload);
            
          console.log(payload);
   
          let res='';
          if(id)   {
               res =axiosInstance.put(`/user/${id}`,payload);
           }
           else{
               res =axiosInstance.post("/user",payload);
           }
           res.then((res)=>{
               console.log(res);
               if(res.status =200){
                  navigate('/users');
               }
          }).catch((error) => {
           if (error.response && error.response.data.errors) {
             const errors = error.response.data.errors;
             setUserError((prevUserError) => ({
                   ...userError,
                   nameError: errors.name ? errors.name.join('<br>') : '',
                   emailError: errors.email ? errors.email.join('<br>') : '',
                   passwordError: errors.password ? errors.password.join('<br>') :'',
                   designationError: errors.designation ? errors.designation.join('<br>') : '',
             }));
           } else {
                   //   setOtherError('An error occurred.');
           }
         });
   
   
    }
  
    const designationOption =[
            {key:'Content Writer',value:'Content Writer'},
            {key:'Seo', value:'Seo'},
            {key:'Email Support', value:'Email Support'},
            {key:'Full User',value:'Full User'}]
            
    const actions = () => {
      return (
        <div>
          <FormInputField
            label={'Name'}
            type={'text'}
            placeHolder={'Enter User Name'}
            onChange={(ev) => setUserData({ ...userData, name: ev.target.value })}
            value={userData.name}
            error={userError.nameError}
          />
          <FormInputField
            label={'Email'}
            type={'email'}
            placeHolder={'Enter User Email'}
            onChange={(ev) => setUserData({ ...userData, email: ev.target.value })}
            value={userData.email}
            error={userError.emailError}
          />
          <FormInputField
            label={'Password'}
            type={'password'} 
            placeHolder={'Enter User Password'}
            onChange={(ev) => setUserData({ ...userData, password: ev.target.value })}
            value={userData.password}
            error={userError.passwordError}
          />
          <FormSelectOption
            label={'Designation'}
            attribute={'Designation'}
            onChange={(e) => setUserData({ ...userData, designation: e.target.value })}
            value={userData.designation}
          > 
                <option value="">Select Designation</option>
                {designationOption.map((option) => (
                                        
                                        <option
                                        key={option.key}
                                        value={option.key}
                                        // selected={option.key === project.project_status ? 'selected' : null}
                                        >
                                            {option.value}
                                        </option>
                                        ))}

          </FormSelectOption>
        </div>
      );
    };
  
    return (
      <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 ">
        <div className="relative overflow-x-auto  py-4 px-4 mx-12">
          <form onSubmit={onsubmit} method="post">
            {actions()}
            <button
                type="submit"
                className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                userData.id ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-indigo-600 hover:bg-indigo-500'
                 } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              
            >
            {userData.id ? 'Update' : 'Save'}
           </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default UserRegisrterForm;
  

