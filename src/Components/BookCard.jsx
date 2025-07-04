import React from 'react'

const BookCard = ({ book }) => {
    return (
        <div className="bg-white p-4 shadow rounded flex gap-4 items-start text-black">
            <img
                src={book.image}
                alt={book.title}
                className="w-16 h-24 object-cover rounded"
            />
            <div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600 italic mb-2">{book.author}</p>
                <p className="text-sm text-gray-700">{book.description}</p>
            </div>
        </div>
    );
}

export default BookCard
