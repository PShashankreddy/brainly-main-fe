import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col'>
      {/* Header */}
      <div className='flex justify-between items-center p-6 border-b border-gray-200 bg-white'>
        <div className='flex items-center gap-2'>
          <div className='text-2xl font-bold text-purple-600'>🧠</div>
          <h1 className='text-2xl font-bold text-gray-800'>Brainly</h1>
        </div>
        <div className='flex gap-3'>
          <Button 
            onClick={() => navigate('/signin')} 
            variant="secondary" 
            text="Sign In"
          />
          <Button 
            onClick={() => navigate('/signup')} 
            variant="primary" 
            text="Sign Up"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex-1 flex flex-col items-center justify-center px-6 py-20'>
        <div className='max-w-2xl text-center'>
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>
            Your Personal Knowledge Hub
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Organize, collect, and share your favorite content from Twitter, YouTube, and beyond. 
            Build your second brain and never lose track of great ideas again.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12'>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl mb-3'>📌</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Save Content</h3>
              <p className='text-gray-600'>
                Easily save tweets, videos, and links from across the web.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl mb-3'>🏷️</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Organize</h3>
              <p className='text-gray-600'>
                Tag and categorize your content for easy discovery.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl mb-3'>🔗</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Share</h3>
              <p className='text-gray-600'>
                Share your brain with others or keep it private.
              </p>
            </div>
          </div>

          <div className='flex gap-4 justify-center'>
            <Button 
              onClick={() => navigate('/signup')} 
              variant="primary" 
              text="Get Started"
            />
            <Button 
              onClick={() => navigate('/signin')} 
              variant="secondary" 
              text="Sign In"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-white border-t border-gray-200 py-6 px-6 text-center text-gray-600'>
        <p>© 2026 Brainly. Organize your thoughts. Share your knowledge.</p>
      </div>
    </div>
  );
}
