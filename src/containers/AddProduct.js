import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [status, setStatus] = useState(false);
  const [seoHide, setSeoHide] = useState(false);
  const [productHide, setproductHide] = useState(false);

  return (
    <>
      <div className='py-2 px-10'>
        <Link to='/products'>
          <button className='pb-3 pointer'>
            <span className='px-5 py-2 inline-flex text-lg leading-5 font-bold font-sans rounded-full bg-[#325aa8] text-white'>
              <span className='pr-3'>&lt;</span> Go back
            </span>
          </button>
        </Link>
        <div
          className='mt-10 sm:mt-0'
          onClick={(e) => {
            e.preventDefault();
            setSeoHide(!seoHide);
          }}
        >
          <div className='bg-gray-200 p-5 rounded-md'>
            <div className='md:col-span-1'>
              <h3 className='text-xl font-bold leading-6 text-gray-800 flex'>
                SEO Section{' '}
                <span className='ml-auto font-[FontAwesome]'>
                  {seoHide ? <span>&#xf078;</span> : <span>&#xf077;</span>}
                </span>
              </h3>
            </div>
          </div>
        </div>
        {/* <div
          className={`mt-5 md:mt-0 md:col-span-2 pt-4  ${
            seoHide
              ? 'transform transition ease-in-out duration-500 -translate-y-full scale-y-0'
              : 'transform transition ease-in-out duration-500 -translate-y-0 scale-y-100 '
          }`}
        > */}
        <div
          className={`mt-5 md:mt-0 md:col-span-2 pt-4  ${seoHide && 'hidden'}`}
        >
          <form>
            <div className='shadow overflow-hidden sm:rounded-md border-2'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    is='x3d'
                    htmlFor='seo-title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    name='seo-title'
                    id='seo-title'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    is='x3d'
                    htmlFor='meta-description'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Meta Description
                  </label>
                  <textarea
                    name='meta-description'
                    id='meta-description'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    is='x3d'
                    htmlFor='keywords'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Keywords
                  </label>
                  <input
                    type='text'
                    name='keywords'
                    id='keywords'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
              </div>
              {/* <div className='flex flex-col items-center'>
                {' '}
                <button
                  type='submit'
                  onClick={(e) => e.preventDefault()}
                  className='bg-[#325aa8] text-white py-2 my-2 px-10 rounded-md w-1/4 h-12 text-center text-2xl font-semibold'
                >
                  Update
                </button>
              </div> */}
            </div>
          </form>
        </div>

        <div
          className='mt-10 sm:mt-0 pt-4'
          onClick={(e) => {
            e.preventDefault();
            setproductHide(!productHide);
          }}
        >
          <div className='bg-gray-200 p-5 rounded-md'>
            <div className='md:col-span-1'>
              <h3 className='text-xl font-bold leading-6 text-gray-800 flex'>
                Product Information
                <span className='ml-auto font-[FontAwesome]'>
                  {productHide ? <span>&#xf078;</span> : <span>&#xf077;</span>}
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`mt-5 md:mt-0 md:col-span-2 pt-4 ${
            productHide && 'hidden'
          }`}
        >
          <form>
            <div className='shadow overflow-hidden sm:rounded-md border-2'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='flex flex-row'>
                  <label
                    is='x3d'
                    htmlFor='status'
                    className=' text-sm font-medium text-gray-700'
                  >
                    Status:
                  </label>
                  <span className='px-2  scale-150'>
                    <input
                      name='status'
                      id='status'
                      type='checkbox'
                      checked={status}
                      onChange={(e) => {
                        setStatus(!status);
                      }}
                    />
                  </span>
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    is='x3d'
                    htmlFor='product-title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    name='product-title'
                    id='product-title'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 pt-3 sm:col-span-3'>
                  <label
                    is='x3d'
                    htmlFor='description'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Description
                  </label>
                  <textarea
                    name='description'
                    id='description'
                    className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='grid grid-cols-6 gap-6 pt-3'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      is='x3d'
                      htmlFor='price'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Price
                    </label>
                    <input
                      type='text'
                      name='price'
                      id='price'
                      className='mt-1 py-2 border-2 pl-3  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      is='x3d'
                      htmlFor='quantity'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Quantity
                    </label>
                    <input
                      type='number'
                      name='quantity'
                      id='quantity'
                      autoComplete='family-name'
                      className='mt-1 py-2 pl-3 border-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>

              {/* <div className='flex flex-col items-center'>
                {' '}
                <button
                  type='submit'
                  onClick={(e) => e.preventDefault()}
                  className='bg-[#325aa8] text-white py-2 my-2 px-10 rounded-md w-1/4 h-12 text-center text-2xl font-semibold'
                >
                  Update
                </button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
