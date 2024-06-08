import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./component/SearchPage";
import BookshelfPage from "./component/BookshelfPage";

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage setBookshelf={setBookshelf} bookshelf={bookshelf} />} />
        <Route path="/mybookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
      </Routes>
    </div>
  );
}

export default App;
