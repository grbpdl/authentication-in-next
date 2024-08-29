'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const alertShownRef = useRef(false); // Ref to track if alert has been shown

  const logout = () => {
    // deletee cokie on logout
    Cookies.remove('auth');
    router.push('/');
  };

  useEffect(() => {
    const auth = Cookies.get('auth');
    if (!auth) {
      if (!alertShownRef.current) {
        alert('You need to log in to access the dashboard.');
        alertShownRef.current = true;
      }
      router.push('/login');
    } else {
      setAuthChecked(true); 
    }
  }, []);

  if (!authChecked) {
    return null; 
  }

  return (
    <div className="flex items-center justify-center h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Welcome to the dashboard! This is a protected page.
        </h1>
        <button
          onClick={logout}
          className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
        >
          <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
            Logout &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
