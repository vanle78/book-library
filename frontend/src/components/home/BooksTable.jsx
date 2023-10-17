import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({listBook}) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {listBook.map((item, index) => {
                    return (
                        <tr className='h-8' key={item._id}>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index + 1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-left'>
                                {item.title}
                            </td>
                            <td className='border border-slate-700 rounded-md text-left max-md:hidden'>
                                {item.author}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {item.publishYear}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <Link to={`/books/details/${item._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800 link-inline-block' />
                                </Link>
                                <Link to={`/books/edit/${item._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600 link-inline-block' />
                                </Link>
                                <Link to={`/books/delete/${item._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600 link-inline-block' />
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default BooksTable;