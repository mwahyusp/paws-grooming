import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <Link to="/blog" className="text-primary hover:text-secondary">
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>

        {/* Header Artikel */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </header>

        {/* Konten Artikel */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="flex items-center">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                {post.author}
              </h3>
              <p className="text-gray-600">
                {post.author === "Dr. Anita Wijaya"
                  ? "Dokter hewan dengan spesialisasi perawatan kucing dan grooming profesional dengan pengalaman 10 tahun."
                  : post.author === "Budi Santoso"
                  ? "Professional dog trainer dan groomer dengan sertifikasi internasional. Pemilik GroomingPaws."
                  : "Dokter hewan senior dengan spesialisasi dermatologi hewan dan perawatan bulu."}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark mb-3">
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {relatedPost.date}
                      </span>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-primary font-semibold hover:text-secondary">
                        Baca →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Merawat Hewan Peliharaan Anda?
          </h2>
          <p className="mb-6">
            Pesan layanan grooming profesional kami sekarang dan dapatkan
            pengalaman terbaik untuk hewan kesayangan Anda
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-full font-semibold transition-all duration-300">
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
