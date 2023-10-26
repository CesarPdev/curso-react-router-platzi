import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../components/blogdata';
import { useAuth } from '../components/auth';
import { EditPost } from './EditPost';

function BlogPost() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
  const blogdata = useData();

  const [editPost, setEditPost] = useState(false);

  const blogpost = blogdata.data.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.userName;

  const canEdit = blogpost.author === auth.user?.userName;

  const returnToBlog = () => {
    navigate('/blog')
    // otra opción sería
    // navigate(-1)
    // para volver a "la página anterior"
  };

  const handleEdit = () => {
    setEditPost(true);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center m-4'>
      {!editPost && <>
      <h2 className='text-xl font-bold mb-4'>{blogpost.title}</h2>
      <div className='flex flex-col justify-between gap-3'>
        <div className='flex flex-col gap-3'>
          <p className='h-full'>{blogpost.content}</p>
          <p>Autor: {blogpost.author}</p>
        </div>
        <div className='flex justify-center'>
          {canEdit && (
            <button className='bg-teal-700 border text-white text-sm hover:bg-teal-900 mx-1 py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-in-out hover:scale-110'
            onClick={handleEdit}>Editar</button>
          )}
          {canDelete && (
            <button className='bg-red-700 border text-white text-sm hover:bg-red-900 mx-1 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-in-out hover:scale-110'
            onClick={() => blogdata.deleteData(blogpost.title)}>Eliminar</button>
            )}
        </div>
      </div>
      </>}
      {editPost &&
        <EditPost
          setEditPost={setEditPost}
          oldContent={blogpost.content}
        />
      }
      <button className='border m-3 p-2 rounded-lg shadow-md focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110' onClick={returnToBlog}>Volver al Blog</button>
    </div>
  )
}

export default BlogPost;