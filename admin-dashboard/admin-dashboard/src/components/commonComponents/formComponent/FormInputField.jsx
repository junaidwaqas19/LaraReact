import React from 'react'

const FormInputField = ({label, placeHolder,onChange,type,value,error}) => {


  return (
    <div>
            <div className="sm:col-span-1 mt-2">
                <label htmlFor={label} className="flex justify-between  text-sm font-medium leading-6  text-gray-900">
                    {label} {value !==null && <span className="px-4 text-green-500">{value}</span>}
                </label>
        <div className="mt-2">
            <input
                type={type}
                name={label}
                value={value != null ? value :''}
                id={label}
                onChange={onChange}
                placeholder={placeHolder}
                className="block w-full rounded-md border-0 py-3 px-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400  md:text-mdsm:leading-6"
            />
             {error && <div className="text-red-500">{error}</div>}
        </div>
        </div>
    </div>
  )
}

export default FormInputField
