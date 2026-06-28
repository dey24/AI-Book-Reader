import BookCard from "@/components/BookCard";
import HeroSection from "@/components/HeroSection";
import { sampleBooks } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-2xl underline">AI Book Assistant</h1> */}
      <main className="wrapper container">
        <HeroSection />

        <div className="library-books-grid">
          {sampleBooks.map((book) => (
            <BookCard key={book.id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug}/>
          ))}
        </div>
      </main>
    </div>
  );
}
