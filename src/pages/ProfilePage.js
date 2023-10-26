import React from 'react'
import { useAuth } from '../components/auth'
import { Navigate } from 'react-router-dom';

function ProfilePage() {

  const auth = useAuth();

  if (!auth.user) {
    return (
      <Navigate to='/' />
    )
  };

  return (
    <div className='flex flex-col h-screen items-center bg-gradient-to-b from-sky-500 to-indigo-500'>
        <h1 className='text-3xl mb-3 font-bold pt-16'>Profile</h1>
        <p>Bienvenido, {auth.user.userName}</p>
    </div>
  )
}

export default ProfilePage