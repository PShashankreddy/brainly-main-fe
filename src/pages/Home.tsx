import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Button } from '../components/Button';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [showWelcome, setShowWelcome] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/signin');
      return;
    }

    // Get user info
    const getUserInfo = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.username) {
          setUserName(response.data.username);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUserInfo();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  const handleContinue = () => {
    setShowWelcome(false);
  };

  if (showWelcome && userName) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-50 to-gray-100 flex items-center justify-center'>
        <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center'>
          <div className='text-5xl mb-4'>👋</div>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Welcome back!
          </h1>
          <p className='text-xl text-purple-600 font-semibold mb-2'>
            {userName}
          </p>
          <p className='text-gray-600 mb-8'>
            Ready to continue building your knowledge hub?
          </p>
          <div className='flex flex-col gap-3'>
            <Button 
              onClick={handleContinue} 
              variant="primary" 
              text="Continue to Dashboard"
            />
            <Button 
              onClick={handleLogout} 
              variant="secondary" 
              text="Logout"
            />
          </div>
        </div>
      </div>
    );
  }

  return <Dashboard />;
}
