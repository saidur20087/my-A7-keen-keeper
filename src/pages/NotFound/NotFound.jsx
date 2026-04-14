import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-semibold mt-6">Page Not Found</h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-8 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl hover:bg-emerald-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;