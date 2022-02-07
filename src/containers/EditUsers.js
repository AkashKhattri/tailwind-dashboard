import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditUsers = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className='py-2 px-10 '>
        <Link to='/users'>
          <button className='pb-3 pointer'>
            <span className='px-5 py-2 inline-flex text-lg leading-5 font-bold font-sans rounded-full bg-[#325aa8] text-white'>
              <span className='pr-3'>&lt;</span> Go back
            </span>
          </button>
        </Link>
        <div className='mt-10 sm:mt-0 '>
          <div className='bg-gray-200 p-10 rounded-md'>
            <div className='md:col-span-1'>
              <h3 className='text-2xl font-bold  leading-6 text-gray-800'>
                User Information
              </h3>
            </div>
          </div>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2 pt-4'>
          <form>
            <div className='shadow overflow-hidden sm:rounded-md border-2'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='mt-1 py-2 border-2 pl-3  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email Address
                  </label>
                  <input
                    pattern='.+@globex\.com'
                    type='email'
                    name='email'
                    id='email'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 pt-2 sm:col-span-3'>
                  <label
                    htmlFor='role'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Role
                  </label>
                  <select
                    id='role'
                    name='role'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option>Admin</option>
                    <option>Owner</option>
                    <option>Member</option>
                    <option>Editor</option>
                  </select>
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Phone/Mobile
                  </label>
                  <input
                    type='number'
                    name='phone'
                    id='phone'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='grid grid-cols-6 gap-6 pt-3'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='title'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Title
                    </label>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      className='mt-1 py-2 border-2 pl-3  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='sub-title'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Sub Title
                    </label>
                    <input
                      type='text'
                      name='sub-title'
                      id='sub-title'
                      autoComplete='family-name'
                      className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    htmlFor='status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Status
                  </label>
                  <input
                    name='status'
                    id='status'
                    type='checkbox'
                    checked={status}
                    onChange={(e) => {
                      setStatus(!status);
                    }}
                    className='mt-1 py-2 pl-3  checked:bg-green-500  shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='pt-3'>
                  <lable className='block text-sm font-medium text-gray-700'>
                    Photo
                  </lable>
                  <div className='mt-1 flex items-center pt-2'>
                    <span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                      <svg
                        class='h-full w-full text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                    </span>
                    <button
                      type='button'
                      className='ml-5 bg-white py-2 px-3 border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bggr50
                     focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUsers;
