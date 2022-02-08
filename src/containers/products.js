import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Products = () => {
  const productsArr = [
    {
      title: 'Audio Technica',
      category: 'Overear Headphones',
      price: 100,
      quantity: 23,
      status: true,
    },
    {
      title: 'Samsung A40',
      category: 'Smartphones',
      price: 1000,
      quantity: 323,
      status: true,
    },
    {
      title: 'Oneplus 8T',
      category: 'Smartphones',
      price: 100,
      quantity: 23,
      status: true,
    },
    {
      title: 'Whirlpool',
      category: 'Washing Machine',
      price: 100,
      quantity: 23,
      status: false,
    },
  ];

  return (
    <>
      <div className='px-4 flex'>
        {' '}
        <Link to='/add-product' className='pt-3'>
          <button className='pb-3 pointer '>
            <span className='px-5 py-2 inline-flex text-lg leading-5 font-bold font-sans rounded-md bg-[#325aa8] text-white'>
              <span className='pr-2 '>+</span> Add Product
            </span>
          </button>
        </Link>
        <div className='ml-auto pt-3 pb-3 flex items-baseline'>
          <h5 className='text-sm'>Publish:</h5>
          <div className='pl-2'>
            <select
              id='status'
              name='status'
              className='mt-1  block w-full py-1 pr-10 text-left border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              <option>All</option>
              <option>Active</option>
              <option>Disable</option>
            </select>
          </div>
        </div>
        <div className='pt-3 pl-2'>
          <input
            type='text'
            placeholder='&#xf002;   Search'
            name='search'
            id='search'
            className='font-[FontAwesome] mt-1  block w-full py-1 pr-8 px-2 text-left border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='pt-4 pl-2'>
          <button className='bg-blue-600 text-white rounded-lg w-20 h-8 font-semibold'>
            Filter
          </button>
        </div>
        <div className='pt-4 pl-2'>
          <button className='bg-gray-300 text-gray-800 rounded-lg w-20 h-8 font-semibold'>
            Reset
          </button>
        </div>
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
                      className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider '
                    >
                      Title
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Quantity
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider'
                    >
                      Status
                    </th>
                    <th className='relative px-6 py-3' scope='col'>
                      <span className='sr-only'>Edit</span>
                    </th>
                    <th className='relative px-6 py-3' scope='col'>
                      <span className='sr-only'>Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {productsArr.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className='px-6 py-2 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                src='https://cloud.audio-technica.com/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/ath-m50x_01a.png'
                                alt=''
                                className='h-10 w-10 rounded-full'
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>
                                {e.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500'>
                          {e.price}
                        </td>
                        <td className='px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 '>
                          {e.quantity}
                        </td>
                        <td className='px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 '>
                          {e.category}
                        </td>

                        <td className='px-6 py-4 text-center whitespace-nowrap'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              e.status ? 'bg-green-100' : 'bg-red-100'
                            }  text-green-800`}
                          >
                            {e.status ? 'Active' : 'Disable'}
                          </span>
                        </td>

                        <td className='pl-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <Link
                            to={'/edit-user'}
                            className='text-indigo-600 hover:text-indigo-900'
                          >
                            Edit
                          </Link>
                        </td>
                        <td className='pr-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <Link
                            to={'/edit-user'}
                            className='text-red-600 hover:text-red-900'
                          >
                            Delete
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
      <div className='flex flex-col items-end pt-6'>
        <span>
          <Pagination />
        </span>
      </div>
    </>
  );
};

export default Products;
