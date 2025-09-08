import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
          Apa Kata Pelanggan Kami?
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            <p className="italic text-gray-700 mb-6">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-bold text-dark">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
