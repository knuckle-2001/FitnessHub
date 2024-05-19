// import './Navbar.css'
// import logo from '../../assests/fitness.png' 
// import { IoSearch } from "react-icons/io5";
// import profile from '../../assests/profile.jpg'
// import * as React from 'react';
// import Search from '../Search/Search';

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className='navbar-left'>
//             <img src={logo} alt=''/>
//             <span>Fit Fusion</span>
//         </div>
//         <div className='navbar-mid flex'>
//             <span className='navbar-mid-options'>Exercise</span>
//             <span className='navbar-mid-options'>Diet Plan</span>
//             <span className='navbar-mid-options'>Sports</span>
//             <span className='navbar-mid-options'>Store</span>
//             <span className='navbar-mid-options'>Gyms near you</span>
//         </div>

//         <div className='navbar-search'>
//             <Search/>
//         </div>


//         <div className='navbar-right'>
//             <img src={profile}/>
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import logo from '../../assests/fitness.png'; // Assuming it's assets, not assests
import { IoSearch } from "react-icons/io5";
import profile from '../../assests/profile.jpg';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-900 text-white py-4 px-6'>
      {/* Left section */}
      <div className='flex items-center'>
        <img src={logo} alt='Fitness logo' className='w-10 h-10 mr-2' />
        <span className='text-xl font-bold'>Fit Fusion</span>
      </div>

      {/* Middle section */}
      <div className='hidden md:flex space-x-4'>
        <span className='hover:text-gray-300'>Exercise</span>
        <span className='hover:text-gray-300'>Diet Plan</span>
        <span className='hover:text-gray-300'>Sports</span>
        <span className='hover:text-gray-300'>Store</span>
        <span className='hover:text-gray-300'>Gyms near you</span>
      </div>

      {/* Right section */}
      <div className='flex items-center'>
        <div className='relative mr-4'>
          <IoSearch className='absolute top-0 left-3 text-gray-500 pointer-events-none' />
          <Search />
        </div>
        <img src={profile} alt='Profile' className='w-10 h-10 rounded-full' />
      </div>
    </div>
  );
}

export default Navbar;
