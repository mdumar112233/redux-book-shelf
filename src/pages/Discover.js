import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { loadBooks } from '../Redux/Action/BookActions';
const Discover = () => {
    const books = useSelector((state) => {
        return state.books.discoverList;
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooks());
    }, [])
    
    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;