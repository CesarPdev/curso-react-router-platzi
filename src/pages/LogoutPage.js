import React from 'react'
import { useAuth } from '../components/auth';

function LogoutPage() {

  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <div className='flex flex-col h-screen items-center bg-gradient-to-b from-sky-500 to-indigo-500'>
          <h1 className='text-3xl font-bold mb-4 pt-16'>Logout</h1>
        <form
          className='flex flex-col lg:flex-row items-center'
          onSubmit={logout}>
          <label>¿Seguro deseas cerrar sesión {auth.user.userName}?</label>
          <button
            className='border m-3 p-2 pl-4 pr-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110'
            type='submit'>
              Cerrar Sesión
          </button>
        </form>
      </div>
    </>
  )
}

export default LogoutPage