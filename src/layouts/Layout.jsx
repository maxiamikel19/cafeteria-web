import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <h1>Layout principal</h1>

      <Outlet></Outlet>
    </div>
  )
}
