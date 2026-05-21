import { useState } from "react";
import type { Book, BookFormData } from "../../types/book";
import { BookItem } from "../BookItem/BookItem";

type Filter = 'Todos' | 'Lido' | 'Não lido'

interface BookListProps {
    books: Book[];
    onDelete: (id: string) => void;
    onUpdate: (id: string, book: BookFormData) => void;
}

export function BookList({ books, onDelete, onUpdate }: BookListProps) {
    const [filter, setFilter] = useState<Filter>('Todos');

    const filtered = books.filter(book => {
        if (filter === 'Todos') return true;
        return book.status === filter;
    })

    if(books.length === 0) {
        return <p className="empty-state">Nenhum livro cadastrado ainda.</p>
    }

    return (
        <div>
            <div className="list-header">
                <span>Minha lista</span>
                <span className="list-count">
                    {books.length} livro{books.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="filter-tabs">
                {(['Todos', 'Lido', 'Não lido'] as Filter[]).map(tab => (
                    <button
                        key={tab}
                        className={`filter-tab ${filter === tab ? 'filter-tab-active' : ''}`}
                        onClick={() => setFilter(tab)}
                    >
                        {tab === 'Não lido' ? 'Não lidos' : tab === 'Lido' ? 'Lidos' : 'Todos'}
                    </button>    
                ))}
            </div>

            {filtered.length === 0 ? (
                <p className="empty-state">Nenhum livro nessa categoria.</p>
            ) : (
                <section>
                    {filtered.map(book => (
                        <BookItem
                            key={book._id}
                            book={book}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />    
                    ))}
                </section>    
            )}
        </div>
    );
}