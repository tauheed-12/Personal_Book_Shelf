import React from 'react';

export default function BookshelfPage({ bookshelf }) {
    return (
        <div className='bookshelf'>
            <h1>My Bookshelf</h1>
            {bookshelf.length > 0 ? (
                <ul>
                    {bookshelf.map((book) => (
                        <div className="card" key={book.key}>
                            <li>
                                <span className="cardText">Book title:</span> <span>{book.title}</span>
                            </li>
                            <li>
                                <span className="cardText">Edition Count:</span> <span>{book.edition_count}</span>
                            </li>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No books in the bookshelf.</p>
            )}
        </div>
    );
}
