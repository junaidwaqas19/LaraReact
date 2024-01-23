import React from 'react'

const UserInfoDiv = ({label,value}) => {
  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 font-bold ">
                    <div className="">
                        <span >{label}:</span>
                    </div>
                    <div className="sm:col-span-1 font-bold ">
                        <p className="text-green-400 "> {value}</p>
                    </div>
    </div>
  )
}

export default UserInfoDiv
