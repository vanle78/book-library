import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Delete Book successfully', {variant: 'success'});
                navigate('/');
            })
            .catch((error) => {                
                setLoading(false);
                enqueueSnackbar('Error', {variant: 'error'});
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure Your want to Delete Book?</h3>
                <button className='p-2 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                Yes, Delete it
            </button>

            </div>
        </div>
    )
}

export default DeleteBook;