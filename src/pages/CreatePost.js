import React, { useState } from "react";
import { useAuth } from "../components/auth";
import { useData } from "../components/blogdata";

function CreatePost({setCreatePost}) {
    const [title, setTitle] =  useState('');
    const [content, setContent] = useState('');
    
    const auth = useAuth();

    const blogdata = useData();

    const resetForm = () => {
        setTitle("");
        setContent("");
        setCreatePost(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        blogdata.addData({
            title: `${title}`,
            slug: `${title.toLowerCase().replaceAll(' ', '-')}`,
            content: `${content}`,
            author: `${auth.user.userName}`
        });
        resetForm();
    };

    return (
        <form className="flex flex-col items-center justify-center mx-8 w-full md:w-3/4" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold">Crea tu próximo post</h1>
            <label className="flex gap-1 m-2">
                Título:
                <input
                    className="border-none rounded-md ml-2 px-2 bg-sky-200"
                    type="text"
                    value={title}
                    name='title'
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label className="flex flex-col mt-2 w-full h-full">
                Contenido:
                <textarea
                    className="border-none rounded-md mt-1 p-2 h-96 bg-sky-200"
                    value={content}
                    name='content'
                    onChange={e => setContent(e.target.value)}
                ></textarea><br />
            </label>
            <div className="flex justify-center gap-2">
                {title !== '' &&
                <button className='bg-teal-700 border text-white text-sm hover:bg-teal-900 mx-auto
            py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110' type="submit">Publicar</button>}
                <button className='bg-red-700 border text-white text-sm hover:bg-red-900 mx-auto
            py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110' type="button" onClick={() => resetForm()}>Cancelar</button>
            </div>
        </form>
    );
};

export { CreatePost };