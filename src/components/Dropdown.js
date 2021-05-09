import React from 'react';


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'flex flex-col text-center items-center bg-indigo-800 text-white'
          : 'hidden'
      }
      onClick={toggle}
    >
      <a href='/' className='my-4 font-light'>
        Home
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='https://www.goodlives.in/self-test/' target="_blank" rel="noreferrer" className='my-4 font-light'>
        Self Tests
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='https://www.goodlives.in/employee-wellness-program/' target="_blank" rel="noreferrer" className='my-4 font-light'>
        For Businesses
      </a>
      <div style={{"height":"1px"}} className=" w-10/12 bg-white "></div>
      <a href='https://www.goodlives.in/gifts/'  target="_blank" rel="noreferrer" className='my-4 font-light'>
        Gift Now
      </a>
    </div>
  );
};

export default Dropdown;