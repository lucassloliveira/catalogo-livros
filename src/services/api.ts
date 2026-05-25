import axios from "axios";
import type { Book, BookFormData } from '../types/book';

const API_URL = 'https://crudcrud.com/api/4c14c690a96d4402b270eec255dc2faf/livros';

export async function getBooks(): Promise<Book[]> {
    const response = await axios.get<Book[]>(API_URL)
    return response.data
}

export async function createBook(book: BookFormData): Promise<Book> {
    const response = await axios.post<Book>(API_URL, book)
    return response.data
}

export async function deleteBook(id: string): Promise<void> {
    await axios.delete(`${API_URL}/${id}`)
}

export async function updateBook(id: string, book: BookFormData): Promise<Book> {
    const response = await axios.put<Book>(`${API_URL}/${id}`, book)
    return response.data
}