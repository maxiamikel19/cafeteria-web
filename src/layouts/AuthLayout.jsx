import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-5 md:mt-5 flex flex-col md:flex-row items-center">
      <img 
        src="../img/logo-sf1.png" 
        alt="Logo cafeteria" 
        className="max-w-xs "
    />
    <div className="w-full p-10 bg-white shadow-lg rounded-lg">
        <Outlet></Outlet>
    </div>
    </main>
  )
}
