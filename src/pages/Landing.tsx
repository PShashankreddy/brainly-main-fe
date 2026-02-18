import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center text-white font-bold'>B</div>
            <h1 className='text-xl font-bold text-gray-900'>Brainly</h1>
          </div>
          <div className='flex gap-4'>
            <button 
              onClick={() => navigate('/signin')}
              className='px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition'
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-sm transition'
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='pt-24 pb-16 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            Your Personal Knowledge Hub
          </h1>

          <p className='text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto'>
            Save, organize, and share your favorite content from Twitter, YouTube, and across the web. Build your second brain in one simple place.
          </p>

          <div className='flex gap-4 justify-center mb-16'>
            <button 
              onClick={() => navigate('/signup')}
              className='px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition'
            >
              Get Started
            </button>
            <button 
              onClick={() => navigate('/signin')}
              className='px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-semibold transition'
            >
              Sign In
            </button>
          </div>

          {/* Features */}
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6 bg-gray-50 rounded-lg border border-gray-200'>
              <div className='text-3xl mb-3'>💾</div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Save Content</h3>
              <p className='text-gray-600 text-sm'>Save tweets, videos, and articles with one click from anywhere.</p>
            </div>
            <div className='p-6 bg-gray-50 rounded-lg border border-gray-200'>
              <div className='text-3xl mb-3'>🏷️</div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Organize</h3>
              <p className='text-gray-600 text-sm'>Tag and categorize content for instant retrieval.</p>
            </div>
            <div className='p-6 bg-gray-50 rounded-lg border border-gray-200'>
              <div className='text-3xl mb-3'>🚀</div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Share</h3>
              <p className='text-gray-600 text-sm'>Share your collection or keep it private. You decide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='border-t border-gray-200 bg-gray-50 mt-16'>
        <div className='max-w-4xl mx-auto px-6 py-12 text-center'>
          <p className='text-gray-600'>&copy; 2026 Brainly. Build your second brain.</p>
        </div>
      </footer>
    </div>
  );
}
