import { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import Modal from "./Modal";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    petType: "",
    service: "",
    date: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { errors, isSubmitting, setIsSubmitting, validateForm } =
    useFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsModalOpen(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          petType: "",
          service: "",
          date: "",
          message: "",
        });
      }, 2000);
    }
  };

  return (
    <>
      <section
        id="booking"
        className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pesan Layanan Sekarang
          </h2>
          <p className="text-center mb-12">
            Isi formulir di bawah ini dan kami akan menghubungi Anda untuk
            konfirmasi jadwal
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2">
                  Alamat Lengkap *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="petType"
                  className="block text-gray-700 font-medium mb-2">
                  Jenis Hewan *
                </label>
                <input
                  type="text"
                  id="petType"
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.petType ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.petType && (
                  <p className="text-red-500 text-sm mt-1">{errors.petType}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2">
                  Pilih Layanan *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  }`}
                  required>
                  <option value="">Pilih layanan</option>
                  <option value="basic">Paket Basic - Rp 120.000</option>
                  <option value="premium">Paket Premium - Rp 200.000</option>
                  <option value="spa">Spa Treatment - Rp 250.000</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-medium mb-2">
                  Tanggal yang Diinginkan *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2">
                  Pesan Tambahan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </>
                ) : (
                  "Pesan Sekarang"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold text-dark mb-4">Terima Kasih!</h3>
        <p className="text-gray-700 mb-6">
          Pesanan Anda telah diterima. Kami akan menghubungi Anda dalam waktu
          1x24 jam untuk konfirmasi.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
          Tutup
        </button>
      </Modal>
    </>
  );
};

export default BookingForm;
