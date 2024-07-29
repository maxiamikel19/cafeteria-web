import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resume from '../components/Resume'


export default function Layout() {
  return (
    <div className="md:flex">
      <Sidebar />

      <main className=" bg-slate-200 flex-1 h-screen overflow-y-scroll p-3">
        <Outlet></Outlet>
      </main>
    
      <Resume />
    </div>
  )
}
