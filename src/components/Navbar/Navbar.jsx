import { NavLink } from 'react-router-dom';
import { FaHome, FaClock, FaChartBar,  } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6">
      
          <h1 className="text-3xl font-bold text-gray-900">Keen<span className='text-green-800 text-2xl'>Keeper</span></h1>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <NavLink 
            to="/" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 border-b-2 rounded font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaHome size={20} /> Home
          </NavLink>
          
          <NavLink 
            to="/timeline" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 border-b-2 rounded  font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaClock size={20} /> Timeline
          </NavLink>
          
          <NavLink 
            to="/stats" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 border-b-2 rounded  font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaChartBar size={20} /> Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;