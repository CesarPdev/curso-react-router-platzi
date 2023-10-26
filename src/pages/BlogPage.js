import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../components/blogdata';
import { CreatePost } from './CreatePost';
import { useAuth } from '../components/auth';

function BlogPage() {

  const [createPost, setCreatePost] = useState(false);

  const blogdata = useData();

  const auth = useAuth();

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/blog');
    setCreatePost(true);
  };


  return (
  <div className='flex flex-col h-screen items-center bg-gradient-to-b from-sky-500 to-white'>
    <h1 className='text-3xl mb-3 font-bold pt-16'>Blog</h1>
    <section className='flex w-full'>
    {!createPost &&
      <ul className='flex flex-col min-w-fit m-4'>
        {!createPost && auth.user &&
          <button className='border text-white text-sm hover:bg-teal-700 mb-2 py-2 px-2 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease--in-out hover:scale-110'
          onClick={handleCreate}>Crear un Post</button>
        }
        {blogdata.data.length > 0 &&
        <li className='font-semibold'>Post anteriores:</li>}
        {blogdata.data.map(post => (
        <BlogLink key={post.slug} post={post}/>
        ))}
      </ul>
    }
      <Outlet />
      {createPost &&
      <div className='flex justify-center w-full'>
        <CreatePost setCreatePost={setCreatePost} />
      </div>
      }
    </section>
  </div>
  )
}

const BlogLink = ({ post }) => {
  return (
    <li key={post.slug}>
      <NavLink to={`/blog/${post.slug}`}>{post.title}</NavLink>
    </li>
  )
}

export default BlogPage