import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Multi_Column_Layout = () => {
  return (
    <>
      <div className='hidden lg:block bg-blue-300 '>
        <div className='flex flex-col w-80 h-screen  overflow-y-auto border-r bg-blue-300  '>
          <h2 className='text-3xl font-semibold text-center text-blue-800 px-3 pb-1 pt-4'>
            Logo
          </h2>
          <div className='flex flex-col flex-1 justify-between mt-6 px-3 py-8'>
            <aside>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md'
                        : 'flex items-center px-4 py-2 text-gray-700  rounded-md hover:hover:bg-white'
                    }
                    to={'/'}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>

                    <span className='mx-4 font-medium'>Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-50 rounded-md'
                        : 'flex items-center px-4 py-2 mt-5 text-gray-700  rounded-md hover:hover:bg-white'
                    }
                    to={'/users'}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#000000'
                    >
                      <path d='M0 0h24v24H0V0z' fill='none' />
                      <path d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                    </svg>
                    <span className='mx-4 font-medium'>Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-50 rounded-md'
                        : 'flex items-center px-4 py-2 mt-5 text-gray-700  rounded-md hover:hover:bg-white'
                    }
                    to={'/products'}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      enableBackground='new 0 0 24 24'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#000000'
                    >
                      <g>
                        <rect fill='none' height='24' width='24' />
                      </g>
                      <g>
                        <g>
                          <path d='M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4h16V7z' />
                          <rect height='2' width='6' x='9' y='12' />
                        </g>
                      </g>
                    </svg>

                    <span className='mx-4 font-medium'>Products</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-50 rounded-md'
                        : 'flex items-center px-4 py-2 mt-5 text-gray-700  rounded-md hover:hover:bg-white'
                    }
                    to={'/categories'}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 0 24 24'
                      width='24px'
                      fill='#000000'
                    >
                      <path d='M0 0h24v24H0V0z' fill='none' />
                      <path d='M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z' />
                    </svg>

                    <span className='mx-4 font-medium'>Categories</span>
                  </NavLink>
                </li>
              </ul>
            </aside>
          </div>
          <div className='border border-t-yellow-50'></div>

          <div className='flex py-2 pl-3'>
            <div className='py-1'>
              <img
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white '
                src='https://image.shutterstock.com/mosaic_250/259680998/1655747050/stock-photo-young-adult-profile-picture-with-red-hair-1655747050.jpg'
                alt=''
              />
            </div>
            <div className='flex-row pl-4 pb-1'>
              <div className='text-lg font-bold '>Jhon Doe</div>
              <div className='text-sm font-normal text-gray-800'>
                <Link to={'/profile'} className='hover:underline'>
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multi_Column_Layout;
