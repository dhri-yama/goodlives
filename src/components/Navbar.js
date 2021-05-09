import React from 'react'

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-20 bg-indigo-800 text-white relative shadow-lg font-light'
      role='navigation'
    >
      <a href='/' className='pl-8'>
        <img className="h-12" src="https://www.goodlives.in/wp-content/uploads/2020/08/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png" alt="" />
      </a>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <a href='/' className='p-4'>
          Home
        </a>
        <a href='https://www.goodlives.in/self-test/' rel="noreferrer" target="_blank" className='p-4'>
          Self Tests
        </a>
        <a href='https://www.goodlives.in/employee-wellness-program/' target="_blank" rel="noreferrer" className='p-4'>
          For Businesses
        </a>
        <a href='https://www.goodlives.in/gifts/' target="_blank" rel="noreferrer"  className='p-4'>
          Gift Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;