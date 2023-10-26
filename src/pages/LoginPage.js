import React, { useState } from 'react'
import { useAuth } from '../components/auth';
import { Navigate } from 'react-router-dom';

function LoginPage() {

  const auth = useAuth();

  const [userName, setUserName] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({ userName });
  };

  if (auth.user) {
    return <Navigate to='/profile'/>
  }

  return (
    <>
      <div className='flex flex-col h-screen items-center bg-gradient-to-b from-sky-500 to-indigo-500'>
          <h1 className='text-3xl font-bold mb-4 pt-16'>Login</h1>
        <form
          className='flex flex-col lg:flex-row items-center'
          onSubmit={login}>
          <label className='m-2'>Nombre de usuario</label>
          <input
          className='border p-1 rounded-md bg-sky-100'
          value={userName}
          onChange={e => setUserName(e.target.value)} />
          <button
            className='border m-3 p-1 pl-4 pr-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110'
            type='submit'>
              Ingresar
          </button>
        </form>
      </div>
    </>
  )
}

export default LoginPage