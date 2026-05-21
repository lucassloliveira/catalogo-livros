export interface Book {
  _id: string
  title: string
  author: string
  status: 'Lido' | 'Não lido'
}


//O Omit<Book, '_id'> é um utility type do TypeScript, ele pega a interface Book e devolve uma versão idêntica, mas sem o _id.
export type BookFormData = Omit<Book, '_id'>