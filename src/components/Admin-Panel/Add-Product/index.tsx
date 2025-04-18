"use client";

import React, { useState, FormEvent } from "react";
import axios from "axios";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";

interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  imageSrc: string;
  amount?: string;
  category?: string;
  createdAt: Timestamp;
}

interface AddProductProps {
  onProductAdded: (newProduct: Product) => void;
}

type NewProduct = Omit<Product, "id">;

const AddProduct: React.FC<AddProductProps> = ({ onProductAdded }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    type: "free",
    amount: "",
    category: "",
    imageFile: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, imageFile: e.target.files?.[0] || null });
  };

  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "courses");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsnf3mrrq/image/upload",
      formData
    );
    return res.data.secure_url;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.imageFile) return alert("Image is required.");
    if (form.type === "paid" && !form.amount)
      return alert("Please enter amount for paid product.");
    if (!form.category) return alert("Please select a category.");

    setLoading(true);

    try {
      const imageUrl = await uploadImageToCloudinary(form.imageFile);

      const productData: NewProduct = {
        title: form.title,
        description: form.description,
        duration: form.duration,
        type: form.type,
        category: form.category,
        imageSrc: imageUrl,
        createdAt: Timestamp.now(),
      };

      if (form.type === "paid") productData.amount = form.amount;

      const docRef = await addDoc(collection(db, "products"), productData);

      alert("Product added!");

      const newProduct = {
        id: docRef.id,
        ...productData,
      };

      onProductAdded(newProduct);

      setForm({
        title: "",
        description: "",
        duration: "",
        type: "free",
        amount: "",
        category: "", // reset this properly now
        imageFile: null,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1313px] mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-black">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold block mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            className="w-full border p-2 rounded"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Description</label>
          <textarea
            name="description"
            required
            rows={4}
            className="w-full border p-2 rounded"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            required
            className="w-full border p-2 rounded"
            value={form.duration}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Type</label>
          <select
            name="type"
            required
            className="w-full border p-2 rounded"
            value={form.type}
            onChange={handleChange}
          >
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {form.type === "paid" && (
          <div>
            <label className="font-semibold block mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              required
              className="w-full border p-2 rounded"
              value={form.amount}
              onChange={handleChange}
            />
          </div>
        )}

        <div>
          <label className="font-semibold block mb-1">Category</label>
          <select
            name="category"
            required
            className="w-full border p-2 rounded"
            value={form.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a Category
            </option>
            <option value="Forex Trading">Forex Trading</option>
            <option value="Crypto Trading">Crypto Trading</option>
            <option value="Advanced Day Trading Strategies">
              Advanced Day Trading Strategies
            </option>
          </select>
        </div>

        <div>
          <label className="font-semibold block mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            required
            className="w-full border p-2 rounded"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white py-2 px-4 rounded hover:opacity-90"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
