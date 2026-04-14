import { NavLink } from 'react-router-dom';
import { FaHome, FaClock, FaChartBar, FaUsers } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
            <FaUsers className="text-white text-2xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">KeenKeeper</h1>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <NavLink 
            to="/" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaHome size={20} /> Home
          </NavLink>
          
          <NavLink 
            to="/timeline" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaClock size={20} /> Timeline
          </NavLink>
          
          <NavLink 
            to="/stats" 
            className={({isActive}) => `flex items-center gap-2 transition ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <FaChartBar size={20} /> Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;