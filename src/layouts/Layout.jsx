import Modal from 'react-modal'
import { Outlet } from 'react-router-dom'
import useProvider from '../hooks/useProvider'
import Sidebar from '../components/Sidebar'
import Resume from '../components/Resume'
import ModalProduto from '../components/ModalProduto'

const customStyles={
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

Modal.setAppElement("#root")

export default function Layout() {

  const {modal, produto} = useProvider()

  //console.log(modal)
  return (
    <>
      <div className="md:flex">
        <Sidebar />

        <main className=" bg-slate-200 flex-1 h-screen overflow-y-scroll p-3">
          <Outlet></Outlet>
        </main>
      
        <Resume />
      </div>

        <Modal isOpen={modal} style={customStyles}>
            <ModalProduto produto={produto}/>
        </Modal>
      
    </>
  )
}
