import React from 'react' 
import {FaShoppingCart,FaWallet,FaCalendar,FaHome} from 'react-icons/fa'
import {BiFoodMenu,BiShoppingBag} from 'react-icons/bi'
import { NavLink, Outlet } from 'react-router-dom'
import UseCart from '../hook/UseCart'
function Dashboard() {
  const [cart] = UseCart()
  return (
    <div>
    
    <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80   text-base-content">
      
      <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart<div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
      <div className='divider'></div>
      <li><NavLink to='/'><FaHome /> Home</NavLink></li>
       <li> <NavLink to='menu'><BiFoodMenu /> Menu</NavLink></li>
       <li> <NavLink to='/order/salad'> <BiShoppingBag /> Food</NavLink></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default Dashboard