'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="px-8 py-32">
        <div className="grid gap-10 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button onClick={goToLogin} className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Go to login page &rarr;</span>
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button onClick={goToDashboard} className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Go to Dashboard &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
