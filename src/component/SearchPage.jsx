import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchPage({ setBookshelf, bookshelf }) {
    const [results, setResults] = useState([]);
    const [bookname, setBookName] = useState("");

    async function handlechange(event) {
        const newBookName = event.target.value;
        setBookName(newBookName);

        if (newBookName) {
            const result = await fetch(`https://openlibrary.org/search.json?q=${newBookName}&limit=10&page=1`);
            const data = await result.json();
            setResults(data.docs);
        } else {
            setResults([]);
        }
    }

    function addToBookshelf(book) {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }

    return (
        <div className="header">
            <div className="headContent">
                <div className="headContent1">
                    <h1>Search by book name:</h1>
                    <input type="text" name="search" value={bookname} onChange={handlechange} required />
                </div>
                <div className="headContent2">
                    <Link to="/mybookshelf">
                        <button>MyBookshelf</button>
                    </Link>
                </div>
            </div>
            <div>
                {results.length > 0 && (
                    <ul>
                        {results.map((book) => (
                            <div className="card" key={book.key}>
                                <li>
                                    <span className="cardText">Book title:</span> <span>{book.title}</span>
                                </li>
                                <li>
                                    <span className="cardText">Edition Count:</span> <span>{book.edition_count}</span>
                                </li>
                                <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
