
import { NavLink } from 'react-router';
import logo from '../assets/vite.svg'
import Modal from './Modal';
import { Children } from 'react';

function Header({ isOpen, setIsOpen }) {
  return (
    <header className='flex justify-between py-3 px-8 shadow-2xl'>
      <div className="w-11">
        <img src={logo} alt="" className='w-full' />
      </div>
      <nav className=' flex items-center'>
        <ul className='flex gap-4 text-[14px] font-bold'>
          <li> <NavLink to="/" className={({ isActive }) =>
            `${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`
          } > Home </NavLink> </li>
          <li> <NavLink to="./About" className={({ isActive }) =>
            `${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`
          }  >About</NavLink> </li>
          <li> <NavLink to="/Contect" className={({ isActive }) =>
            `${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`
          }  >Contact</NavLink> </li>
          <li>
            <button onClick={() => {
              setIsOpen(true)
            }}>Sign in</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={<div className="text-xl font-bold">Sign In</div>} footer={<div className="flex justify-end gap-4">
              <button onClick={(e) => {
                setIsOpen(false);
                console.log(isOpen)
                console.log("clicked")
              }} className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
                Cancel
              </button>
              <button onClick={(e) => {
                setIsOpen(false);
                console.log(isOpen)
                console.log("clicked")
              }} className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
                Sign In
              </button>
            </div>}> {<div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
              <input
                placeholder="Username"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
              <input
                placeholder="Password"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="password"
              />
            </div>} </Modal>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;