import React, {useEffect, useState} from 'react';
import axios  from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
            setLoading(false);        
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })
        .finally(() => {
            setLoading(false);            
        })
    }, []);
    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
        .put(`http://localhost:5555/books/${id}`, data)
        .then(() => {
            setLoading(false);           
            enqueueSnackbar('Update Book successfully', {variant: 'success'});
            navigate('/');                        
        })
        .catch((error) => {
            //console.log(error);            
            enqueueSnackbar('Error', {variant: 'error'});
            setLoading(false);
        })

    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type='text' className='border-2 border-gray-500 px-2 py-2 w-full' value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input type='text' className='border-2 border-gray-500 px-2 py-2 w-full' value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Published Year</label>
                    <input type='number' className='border-2 border-gray-500 px-2 py-2 w-full' value={publishYear} 
                    onChange={(e) => setPublishYear(e.target.value)}
                    />
                </div>
                <button className='p-2 bg-sky-300 m-4' onClick={handleEditBook}>Save</button>
            </div>
        </div>
    )
}

export default EditBook;