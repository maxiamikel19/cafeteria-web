import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
      <h1 className='text-4xl text-red-600'>Auth Layout</h1>

      <Outlet></Outlet>
    </div>
  )
}
