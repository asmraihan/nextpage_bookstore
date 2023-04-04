import React from 'react';

const Card = ({book}) => {
    console.log(book)
    return (
        <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'> {/* overflow hoy */}
            <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt="book cover" />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 flex flex-col '>
                <p>{book.title}</p>
                <br />
                <p>{book.subtitle ? book.subtitle.substring(0,60) : 'No description available'}...</p>
                <br />
                <p className='mt-auto'>Price :{book.price}</p>
            </div>
        </div>
    );
};

export default Card;