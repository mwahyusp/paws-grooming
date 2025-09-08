import { useState } from "react";

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (value.trim().length < 3) {
          error = "Nama harus minimal 3 karakter";
        }
        break;
      case "phone":
        if (!/^08[0-9]{9,12}$/.test(value)) {
          error = "Format nomor telepon tidak valid. Contoh: 081234567890";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Format email tidak valid. Contoh: nama@email.com";
        }
        break;
      case "address":
        if (value.trim() === "") {
          error = "Alamat harus diisi";
        }
        break;
      case "petType":
        if (value.trim() === "") {
          error = "Jenis hewan harus diisi";
        }
        break;
      case "service":
        if (value === "") {
          error = "Pilih layanan";
        }
        break;
      case "date":
        if (value === "") {
          error = "Pilih tanggal";
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate < today) {
            error = "Tanggal tidak boleh hari kemarin";
          }
        }
        break;
      default:
        break;
    }

    return error;
  };

  const validateForm = (formData) => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    errors,
    isSubmitting,
    setIsSubmitting,
    validateForm,
  };
};
