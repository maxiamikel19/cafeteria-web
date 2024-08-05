
export default function Alerta({children}) {
  return (
    <div className="text-center text-sm my-2 bg-red-400 rounded-md p-2 text-white w-[80%] m-auto">
      {children}
    </div>
  )
}