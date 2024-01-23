import React from 'react';



const FormSelectOption = ({ label, attribute, onChange, value,children }) => {
  return (
    <div className="mb-4 mt-2">
      <label htmlFor={attribute} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={attribute}
        name={attribute}
        onChange={onChange} 
        value={value}
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full md:text-md"
      >
           
          {children}
      </select>
    </div>
  );
};

export default FormSelectOption;


