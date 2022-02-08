import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Users = () => {
  const usersArr = [
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Full Stack Developer',
      'sub-title': 'ReactJS & NodeJS',
      status: true,
      role: 'Admin',
    },
    {
      name: 'Mary Doe',
      email: 'john@gmail.com',
      title: 'Full Stack Developer',
      'sub-title': 'ReactJS & NodeJS',
      status: true,
      role: 'Owner',
    },
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Full Stack Developer',
      'sub-title': 'ReactJS & NodeJS',
      status: false,
      role: 'Member',
    },

    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Content Writer',
      'sub-title': 'Products',
      status: true,
      role: 'Editor',
    },
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Content Writer',
      'sub-title': 'Blogs',
      status: true,
      role: 'Editor',
    },
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Content Writer',
      'sub-title': 'Blogs',
      status: true,
      role: 'Editor',
    },
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Content Writer',
      'sub-title': 'Blogs',
      status: true,
      role: 'Editor',
    },
    {
      name: 'Jhon Doe',
      email: 'john@gmail.com',
      title: 'Content Writer',
      'sub-title': 'Blogs',
      status: true,
      role: 'Editor',
    },
  ];

  return (
    <>
      <div className='flex flex-col items-end px-4'>
        <span>
          {' '}
          <Link to='/add-user'>
            <button className='pb-3 pointer items-end'>
              <span className='px-5 py-2 inline-flex text-lg leading-5 font-bold font-sans rounded-md bg-[#325aa8] text-white'>
                <span className='pr-2 '>+</span> Add User
              </span>
            </button>
          </Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:mx-6 lg:-mx-4'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-blue-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Role
                    </th>
                    <th className='relative px-6 py-3' scope='col'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {usersArr.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                src='https://image.shutterstock.com/mosaic_250/259680998/1655747050/stock-photo-young-adult-profile-picture-with-red-hair-1655747050.jpg'
                                alt=''
                                className='h-10 w-10 rounded-full'
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>
                                {e.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {e.email}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>{e.title}</div>
                          <div className='text-sm text-gray-500'>
                            {e['sub-title']}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              e.status ? 'bg-green-100' : 'bg-red-100'
                            }  text-green-800`}
                          >
                            {e.status ? 'Active' : 'Disable'}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {e.role}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <Link
                            to={'/edit-user'}
                            className='text-indigo-600 hover:text-indigo-900'
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center pt-6'>
        <span>
          <Pagination />
        </span>
      </div>
    </>
  );
};

export default Users;
