import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth } from './auth';

function Menu() {

  const auth = useAuth();

  const routes = [];

  routes.push({
    to: '/',
    text: 'Home',
    private: false
  });

  routes.push({
    to: '/courses',
    text: 'Courses',
    private: false
  });
  
  routes.push({
    to: '/students',
    text: 'Students',
    private: false
  });
  
  routes.push({
    to: '/profile',
    text: 'Profile',
    private: true
  });

  routes.push({
    to: '/blog',
    text: 'Blog',
    private: false
  });

  routes.push({
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true
  });

  routes.push({
    to: '/logout',
    text: 'Logout',
    private: true
  });

  return (
    <nav className='bg-transparent-50 flex items-center justify-center md:justify-between px-4 fixed w-full'>
      <ul className='flex gap-4 justify-center md:justify-start md:gap-3 py-4'>
        {routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
          <li key={route.to}>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? 'white' : 'black'})}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        )
        })}
      </ul>
      {auth.user &&
      <p className='hidden md:flex'>Bienvenido, {auth.user?.userName}</p>}
    </nav>
  )
}

export default Menu