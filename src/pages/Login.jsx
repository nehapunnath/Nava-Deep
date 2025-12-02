import { useState } from 'react';
import { FaEnvelope, FaLock, FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../services/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        // Only allow admin
        if (result.user.isAdmin) {
          navigate('/admin/events');
        } else {
          setError('Access denied. Admin login required.');
        }
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('Server not responding. Is backend running on port 5000?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 school-font mb-2">
            Admin Login
          </h2>
          <p className="text-gray-600 navigation-font">
            Only authorized administrators can access this panel
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 navigation-font mb-2">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 navigation-font text-lg"
                  placeholder="admin@school.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 navigation-font mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 navigation-font text-lg"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm text-center animate-pulse">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-4 px-6 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all disabled:opacity-60 shadow-lg"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Admin Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            This portal is restricted to school administrators only.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;