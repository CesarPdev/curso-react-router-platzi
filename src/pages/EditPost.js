import React, { useState } from "react";
import { useData } from "../components/blogdata";
import { useParams } from "react-router-dom";

function EditPost({setEditPost, oldContent}) {
    const [content, setContent] = useState(oldContent);

    const blogdata = useData();
    const { slug } = useParams();

    const blogpost = blogdata.data.find(post => post.slug === slug);

    const handleSubmit = (e) => {
        e.preventDefault();
        blogdata.editData(blogpost, content);
        setEditPost(false);
    };

    return (
        <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold">{blogpost.title}</h1>
            <label className="flex flex-col mt-2 w-full">
                Contenido:
                <textarea
                    className="border-none rounded-md mt-1 p-2 h-96 bg-sky-200"
                    value={content}
                    name='content'
                    onChange={e => setContent(e.target.value)}
                ></textarea><br />
            </label>
            <div className="flex justify-center gap-2">
                <button className='bg-teal-700 border text-white text-sm hover:bg-teal-900 mx-auto
            py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110' type="submit">Publicar</button>
                <button className='bg-red-700 border text-white text-sm hover:bg-red-900 mx-auto
            py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition duration-200 ease-
            in-out hover:scale-110' type="button" onClick={() => setEditPost(false)}>Cancelar</button>
            </div>
        </form>
    );
};

export { EditPost };