'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'gaurab' && password === 'gaurab') {
      Cookies.set('auth', 'true', { expires: 1 });
      router.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex inset-0 -z-10 h-screen w-full items-center justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      
    <div className=" p-6 m-10  bg-white rounded-md shadow-md lg:max-w-xl">
    
      <form className="mt-6 bg-white rounded-md shadow-md p-6 m-auto" onSubmit={handleSubmit}>
      <label
            htmlFor="hint"
            className="block text-sm  text-gray-800"
          >
          <h1>Hint:Username & password='gaurab'</h1>
          </label>
        <div className="mb-2">
          <label
            htmlFor="username"
            className="block text-sm  text-gray-800"
          >
            Username
          </label>
          
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
        <button type='submit'  className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Login&rarr;</span>
            </button>
        </div>
      </form>

    
    </div>
    </div>
  );
}
