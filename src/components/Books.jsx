import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Books = () => {
    /* prev method e ekhane useState ar useEffect use kore api load kortm */
    // const booksData = useLoaderData() /* destructuring next line */
    const {books} = useLoaderData()
    console.log(books)

    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    books.map((book)=> <Card key={book.isbn13} book={book}></Card>)
                }
            </div>
        </div>
    );
};

export default Books;