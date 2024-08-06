import { Route, Routes } from "react-router-dom";

function App(){
  return (
    <>
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/books">Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/books/new" element={<Book />} />
    </Routes>
    </>
  )
}