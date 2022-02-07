import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='relative bg-white'>
      <div className=' mx-auto px-4 sm:px-6 lg:px-0'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='/#!'>
              <span class='sr-only'>Workflow</span>
              <img
                className='h-8 w-auto sm:h-10 lg:px-8 lg:h-10 '
                src='https://seeklogo.com/images/E/e-commerce-logo-B0AE7EE720-seeklogo.com.png'
                alt=''
              />
            </a>
          </div>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='-mr-2 -my-2 md:hidden'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded='false'
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  class='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
            <nav className='hidden md:flex space-x-10'>
              <div className='relative'>
                <button
                  type='button'
                  class='text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  aria-expanded='false'
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  <span>Username</span>
                  <svg
                    class='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    show ? 'hidden' : ''
                  } absolute z-10 -ml-4 mt-3 transform px-2  sm:px-0  lg:ml-0  lg:-translate-x-7`}
                >
                  <div className='relative grid gap-6 bg-white px-5 lg:p-2 py-6 sm:gap-8 sm:p-8'>
                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                      <a
                        href='!#'
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                      >
                        <div>
                          <p className='text-base font-medium text-gray-900'>
                            Profile
                          </p>
                        </div>
                      </a>
                      <a
                        href='!#'
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                      >
                        <div>
                          <p className='text-base font-medium text-gray-900'>
                            Logout
                          </p>
                        </div>
                      </a>
                      <a
                        href='!#'
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                      >
                        <div>
                          <p className='text-base font-medium text-gray-900'>
                            Help
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className='px-8'>
              <img
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white '
                src='https://image.shutterstock.com/mosaic_250/259680998/1655747050/stock-photo-young-adult-profile-picture-with-red-hair-1655747050.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
