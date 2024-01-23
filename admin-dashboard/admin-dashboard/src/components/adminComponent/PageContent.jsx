import React from 'react';
import Button from './commonComponent/Button';


const PageContent = ({ title, icon, buttons=null ,children }) => {


  return (
    <>
      <div className="bg-slate-50 min-h-screen border-spacing-0 rounded-md ">
        <div className='flex justify-between my-10 p-4  rounded-md bg-white relative overflow-x-auto shadow-md '>
          <div className="title mx-4">
            <h1 className="text-2xl font-semibold hover:text-gray-600">
              <span className="flex justify-between px-2 transition-colors hover:text-gray-600 hover:ease-in-out">
                {icon}{title}
              </span>
            </h1>
          </div>
          {buttons !=null&& buttons.length > 0 && (
            <div className="flex justify-between px-9 mx-4">
              {buttons.map((button, index) => (
                
                <Button
                  key={index}
                  label={button.label}
                  type={button.type}
                  size={button.size}
                  // Pass the callback function from the parent component
                  onClick={ button.btnClick}
                />
              ))}
            </div>
          )}
        </div>
        <div className="m-10 block items-center bg-white sm:rounded-lg">
           {children}
        </div>
      </div>
    </>
  );
}

export default PageContent;
