import type { Book, BookFormData} from "../../types/book";

interface BookItemProps {
    book: Book;
    onDelete: (id: string) => void;
    onUpdate: (id: string, book: BookFormData) => void;
}

export function BookItem({ book, onDelete, onUpdate }: BookItemProps) {
    function handleToggleStatus() {
        const newSatus = book.status === 'Lido' ? 'Não lido' : 'Lido';
        onUpdate(book._id, {
            title: book.title,
            author: book.author,
            status: newSatus
        });
    }

    return (
        <article>
            <div className="card-info">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <span className={`badge ${book.status === 'Lido' ? 'badge-read' : 'badge-unread'}`}>
                    {book.status}
                </span>
            </div>
            <div className="card-actions">
                <button className="btn-toggle" onClick={handleToggleStatus}>
                    {book.status === 'Lido' ? 'Não lido' : 'Lido'}
                </button>
                <button className="btn-delete" onClick={() => onDelete(book._id)}>
                    Remover
                </button>
            </div>
        </article>
    );
}