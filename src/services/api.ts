import axios from "axios";
import type { Book, BookFormData } from '../types/book';

const API_URL = 'https://crudcrud.com/api/0ec67312278b4f32ada2ec889e699afa/livros';

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