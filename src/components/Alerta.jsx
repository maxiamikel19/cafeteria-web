import React from 'react'

export default function Alerta({children}) {
  return (
    <div className="text-center my-2 bg-red-400 rounded-md p-2 text-white w-1/2 m-auto">
      {children}
    </div>
  )
}
