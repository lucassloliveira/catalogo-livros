import { useState } from "react";
import type { BookFormData } from "../../types/book";

interface BookFormProps {
    onAdd: (book: BookFormData) => void
}

export function BookForm({ onAdd }: BookFormProps) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState<'Lido' | 'Não lido'>('Não lido');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!title.trim() || !author.trim()) return;

        onAdd({ title, author, status });

        setTitle('');
        setAuthor('');
        setStatus('Não lido');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="form-title">Adicionar livro</p>
            <div className="input-group">
                <label>Título</label>
                <input
                    type="text"
                    placeholder="Ex: O Senhor dos Anéis"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Autor</label>
                <input
                    type="text"
                    placeholder="Ex: J.R.R. Tolkien"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Status</label>
                <select
                    value={status}
                    onChange={e => setStatus(e.target.value as 'Lido' | 'Não lido')}
                >
                    <option value="Não lido">Não lido</option>
                    <option value="Lido">Lido</option>
                </select>
            </div>
            <button type="submit">Adicionar livro</button>
        </form>
    );
}