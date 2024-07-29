import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resume from '../components/Resume'


export default function Layout() {
  return (
    <div className="md:flex">
      <Sidebar />

      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      
      <Resume />
    </div>
  )
}
