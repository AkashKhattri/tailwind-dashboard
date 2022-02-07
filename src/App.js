import { useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// import Navbar from './components/Navbar';
import Home from './containers/Home';
import MultiColumnLayout from './components/Multi_Column_Layout';
import Products from './containers/products';
import Users from './containers/Users';
import Categories from './containers/Categories';
import EditUsers from './containers/EditUsers';

function App() {
  const location = useLocation();

  return (
    <>
      {/* <Navbar /> */}
      {/* {location.pathname.includes('edit') ||
      location.pathname.includes('add') ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/users' element={<Users />} />
          <Route path='/edit-user' element={<EditUsers />} />
        </Routes>
      ) : ( */}
      <div className='flex'>
        {!location.pathname.includes('edit') &&
          !location.pathname.includes('add') && <MultiColumnLayout />}
        <div className='w-full h-full p-4 m-8 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/users' element={<Users />} />
            <Route path='/edit-user' element={<EditUsers />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
