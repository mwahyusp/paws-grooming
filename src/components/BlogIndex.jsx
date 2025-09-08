import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogIndex = () => {
  const [selectedTag, setSelectedTag] = useState("all");

  // Get all unique tags
  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))];

  // Filter posts by tag
  const filteredPosts =
    selectedTag === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Blog GroomingPaws
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan tips, trik, dan informasi terbaru tentang perawatan hewan
            peliharaan dari para ahli kami
          </p>
        </header>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}>
              {tag === "all" ? "Semua Artikel" : `#${tag}`}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-dark mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary font-semibold hover:text-secondary transition-colors">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-semibold text-dark mb-2">
              Tidak ada artikel
            </h3>
            <p className="text-gray-600 mb-6">
              Tidak ada artikel dengan tag yang dipilih
            </p>
            <button
              onClick={() => setSelectedTag("all")}
              className="bg-primary text-white hover:bg-secondary py-2 px-6 rounded-full transition-all duration-300">
              Lihat Semua Artikel
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Tetap Terupdate
            </h2>
            <p className="text-gray-600 mb-6">
              Berlangganan newsletter kami untuk mendapatkan tips perawatan
              hewan terbaru langsung ke email Anda
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white hover:bg-secondary py-3 px-6 rounded-lg transition-all duration-300">
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
