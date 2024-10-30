import { BookData } from '@/types';

export default async function fetchOneBook(bookId: number): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${bookId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
