import { useState, useEffect } from "react";
import type { Book, BookFormData } from "./types/book";
import { getBooks, createBook, deleteBook, updateBook } from "./services/api";
import { BookForm } from './components/BookForm/BookForm';
import { BookList } from './components/BookList/BookList';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
    try {
      // sucesso → setLoading(false) roda
      const data = await getBooks();
      setBooks(data);
    } catch {
      // erro → setLoading(false) também roda
      setError('Erro ao carregar livros.');
    } finally {
      setLoading(false); // sempre executa
    }
  }

    fetchBooks()
  }, []);

  async function handleAddBook(book: BookFormData) {
    try {
      const newBook = await createBook(book);
      setBooks(prev => [...prev, newBook]);
    } catch {
      setError('Erro ao adicionar livro.');
    }
  }

  async function handleDeleteBook(id: string) {
    try {
      await deleteBook(id);
      setBooks(prev => prev.filter(book => book._id !== id));
    } catch {
      setError('Erro ao deletar o livro.');
    }
  }

  async function handleUpdateBook(id: string, book: BookFormData) {
    try {
      await updateBook(id, book);
      setBooks(prev => prev.map(b => b._id === id ? { ...b, ...book } : b));
    } catch {
      setError('Erro ao atualizar livro.')
    }
  }

  return (
    <main>
    <div className="app-header">
      <h1>Catálogo de Livros</h1>
      <p>Seus livros organizados em um só lugar</p>
    </div>
    {error && <p className="error-msg">{error}</p>}
    <BookForm onAdd={handleAddBook} />
    {loading
      ? <p className="loading">Carregando...</p>
      : <BookList
          books={books}
          onDelete={handleDeleteBook}
          onUpdate={handleUpdateBook}
        />
      }
    </main>
  );
}

export default App;