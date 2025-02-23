

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">My Blog</h1>
        <p className="text-gray-600">Thoughts, stories, and ideas.</p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto">
        <div className="space-y-12">
          <article className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4 hover:text-blue-600">
              <a href="/posts/first-post">Getting Started with Web Development</a>
            </h2>
            <p className="text-gray-600 mb-4">Published on March 15, 2024</p>
            <p className="text-gray-800">Learn about the fundamental concepts of web development and how to begin your journey as a developer...</p>
          </article>
          
          <article className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4 hover:text-blue-600">
              <a href="/posts/second-post">The Future of AI in Technology</a>
            </h2>
            <p className="text-gray-600 mb-4">Published on March 10, 2024</p>
            <p className="text-gray-800">Exploring the latest trends in artificial intelligence and its impact on the tech industry...</p>
          </article>
        </div>
      </main>

      <footer className="w-full max-w-4xl mx-auto text-center text-gray-600">
        <p>© 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
