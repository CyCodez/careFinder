import React, { useEffect, useState } from "react";
import "./LibraryPage.css";
import { Helmet } from "react-helmet-async";

interface Book {
  key: string;
  title: string;
  authors: string[];
  firstPublishYear: number;
  coverUrl: string;
}

const LibraryPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setisLoading(true);
    try {
      const response = await fetch(
        "https://openlibrary.org/subjects/medicine.json?limit=20"
      );
      const data = await response.json();
      if (data.works) {
        const booksData: Book[] = data.works.map((work: any) => ({
          key: work.key,
          title: work.title,
          authors: work.authors?.map((author: any) => author.name) || [],
          firstPublishYear: work.first_publish_year,
          coverUrl: `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg`,
        }));
        setBooks(booksData);
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  console.log(books);
  return (
    <div className="library-container">
      <Helmet>
        <title>Library Page</title>
        <meta name="description" content="Provides details of medical books" />
        <link rel="canonical" href="/library" />
      </Helmet>
      <h1>Medical Books</h1>
      <div className="book-list">
        {isLoading ? (
          <h4>Loading Medical Books...</h4>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book.key}>
              <img
                className="book-cover"
                src={book.coverUrl}
                alt={book.title}
              />
              <div className="book-details">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-authors">{book.authors.join(", ")}</p>
                <p className="book-year">
                  First published in {book.firstPublishYear}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
