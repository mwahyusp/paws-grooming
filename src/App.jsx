import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ... import lainnya
import BlogIndex from "./components/BlogIndex";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <main id="main-content">
                <Hero />
                <Services />
                <Features />
                <Gallery />
                <Testimonials />
                <FAQ />
                <Blog />
                <BookingForm />
              </main>
            }
          />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>

        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  );
}
