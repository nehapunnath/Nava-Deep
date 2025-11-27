import { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaCalendarAlt, 
  FaImages,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    // {
    //   id: 'home',
    //   label: 'Dashboard',
    //   icon: <FaHome className="text-lg" />,
    //   path: '/admin'
    // },
    {
      id: 'events',
      label: 'Events',
      icon: <FaCalendarAlt className="text-lg" />,
      path: '/admin/events'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: <FaImages className="text-lg" />,
      path: '/admin/gallery'
    }
  ];

  const bottomMenuItems = [
    // {
    //   id: 'profile',
    //   label: 'Profile',
    //   icon: <FaUser className="text-lg" />,
    //   path: '/admin/profile'
    // },
    // {
    //   id: 'settings',
    //   label: 'Settings',
    //   icon: <FaCog className="text-lg" />,
    //   path: '/admin/settings'
    // }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar on mobile after navigation
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // navigate('/login');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-gradient-to-b from-blue-900 to-purple-900
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col shadow-2xl
      `}>
        {/* Header */}
        <div className="p-6 border-b border-blue-700/50">
          <div className="flex items-center space-x-3">
            {/* <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-xl school-font">ND</span>
            </div> */}
            <div>
              <h1 className="text-white text-xl font-bold school-font">Nava Deep</h1>
              <p className="text-blue-200 text-sm navigation-font">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-white/20 text-white shadow-lg border border-white/20' 
                  : 'text-blue-100 hover:bg-white/10 hover:text-white hover:border hover:border-white/10'
              }`}
            >
              <div className={`${isActive(item.path) ? 'text-white' : 'text-blue-300'}`}>
                {item.icon}
              </div>
              <span className="font-semibold navigation-font text-left">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-blue-700/50 space-y-2">
          {bottomMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-white/20 text-white shadow-lg border border-white/20' 
                  : 'text-blue-100 hover:bg-white/10 hover:text-white hover:border hover:border-white/10'
              }`}
            >
              <div className={`${isActive(item.path) ? 'text-white' : 'text-blue-300'}`}>
                {item.icon}
              </div>
              <span className="font-semibold navigation-font text-left">{item.label}</span>
            </button>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 text-blue-100 hover:bg-red-500/20 hover:text-red-200 hover:border hover:border-red-500/30"
          >
            <FaSignOutAlt className="text-blue-300" />
            <span className="font-semibold navigation-font text-left">Logout</span>
          </button>
        </div>

        
      </div>
    </>
  );
};

export default Sidebar;