import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const dataContext = createContext();

function DataProvider(props) {

    const initialData = [{
        title: '¿Qué es React?',
        slug: 'que-es-react',
        content: 'React es el mejor framework de JavaScript',
        author: 'César'
        },
        {
        title: '¿Qué es Vue?',
        slug: 'que-es-vue',
        content: 'Vue es el mejor framework de JavaScript',
        author: 'David'
        },
        {
        title: '¿Qué es Angular?',
        slug: 'que-es-angular',
        content: 'Angular es el mejor framework de Google',
        author: 'Juan'
        },
        {
        title: 'Lorem Ipsum',
        slug: 'lorem',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto molestias nisi doloribus alias? Iste sit commodi maiores ducimus, ex corporis pariatur, incidunt libero dolore porro distinctio ratione officia ipsum? Eveniet animi perspiciatis ipsa amet voluptate reprehenderit soluta officia totam suscipit. Asperiores ea ducimus nam suscipit modi. Explicabo ipsa porro voluptate, beatae soluta illum quas ut omnis. Necessitatibus, expedita blanditiis. Ea voluptate delectus magnam illum vel soluta, fugit cum ducimus deleniti nulla aut commodi laborum nostrum quos sunt laudantium aspernatur. Facilis ipsum excepturi cupiditate? Odio assumenda hic eveniet molestias magni.',
        author: 'Lorena'
        }
    ];

    const [data, setData] = useState(initialData);
    const navigate = useNavigate();

    const addData = (newElement) => {
        setData(data => [...data, newElement]);
        navigate('/blog');
    };

    const deleteData = (text) => {
        const newBlogs = data.filter(e => e.title !== text);
        setData([...newBlogs]);
        navigate('/blog');
    };

    const changeStatus = (text) => {
        const eleFound = data.find(e => e.title === text);
        const indFound = data.indexOf(eleFound);
        const editedElement = {
            title: `${data[indFound].title}`,
            slug: `${data[indFound].slug}`,
            content: `${data[indFound].content}`,
            author: `${data[indFound].author}`
        };
        const editedArray = data.map(e => e.title === text ? editedElement : e);
        setData([...editedArray]);
        navigate('/blog');
    };

    const editData = (blog, text) => {
        const editedElement = {
            title: blog.title,
            slug: blog.slug,
            content: text,
            author: blog.author
        }
        const editedArray = data.map(e => e.title === blog.title ? editedElement : e);
        setData([...editedArray]);
    };
    
    const blogdata = { data, addData, deleteData, editData, changeStatus };

    return (
        <dataContext.Provider value={blogdata}>
            {props.children}
        </dataContext.Provider>
    );

}

function useData() {
    const data = useContext(dataContext);
    return data;
}

export { DataProvider, useData };