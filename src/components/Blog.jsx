import { blogPosts } from "../data/blogPosts";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Blog = () => {
  return (
    <section className="py-16 bg-gray-50 scroll-mt-70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
          Tips Perawatan Hewan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const [ref, isVisible] = useScrollAnimation();

            return (
              <article
                key={post.id}
                ref={ref}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary font-semibold hover:text-secondary transition-colors duration-300">
                      Baca Selengkapnya →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block bg-primary text-white hover:bg-secondary py-3 px-8 rounded-full transition-all duration-300">
            Lihat Semua Artikel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
