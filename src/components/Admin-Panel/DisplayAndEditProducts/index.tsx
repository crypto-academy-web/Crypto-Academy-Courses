"use client";
import React, { useState } from "react";
import Image from "next/image";
import { db } from "@/firebase";
import { deleteDoc, doc, updateDoc, Timestamp } from "firebase/firestore";
import axios from "axios";

import Text from "@/components/ui/Text";
// import Spinner from "@/components/ui/Spinner";

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

interface DisplayAndEditProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const DisplayAndEditProducts: React.FC<DisplayAndEditProductsProps> = ({
  products,
  setProducts,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  // const [Loading, setLoading] = useState(false);

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

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditedProduct({
      ...product,
      category: product.category || "", // Ensure category is always defined
    });
    setNewImageFile(null);
  };

  const handleSave = async () => {
    if (!editingId) return;

    setSaving(true);
    let imageUrl = editedProduct.imageSrc;

    if (newImageFile) {
      imageUrl = await uploadImageToCloudinary(newImageFile);
    }

    await updateDoc(doc(db, "products", editingId), {
      title: editedProduct.title,
      description: editedProduct.description,
      duration: editedProduct.duration,
      type: editedProduct.type,
      imageSrc: imageUrl,
      ...(editedProduct.type === "paid" && {
        amount: editedProduct.amount,
      }),
      category: editedProduct.category || "",
    });

    const updatedProducts = products.map((p) =>
      p.id === editingId
        ? {
            ...p,
            ...editedProduct,
            imageSrc: imageUrl!,
          }
        : p
    ) as Product[];

    setProducts(updatedProducts);
    setEditingId(null);
    setEditedProduct({});
    setNewImageFile(null);
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "products", id));
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-[1268px] mx-auto px-4 py-10">
      <Text className="text-[48px] font-bold text-center mb-10 text-black">
        Manage Courses
      </Text>

      {/* {Loading ? (
        <div className="mx-auto flex justify-center items-center">
          <Spinner fill="#000" />
        </div>
      ) : (
      )} */}
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-5 bg-gray-50 shadow-md space-y-8"
          >
            {editingId === product.id ? (
              <>
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={editedProduct.title}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        title: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Description:
                  </label>
                  <textarea
                    value={editedProduct.description}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        description: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Duration:
                  </label>
                  <input
                    type="text"
                    value={editedProduct.duration}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        duration: e.target.value,
                      })
                    }
                    className="w-full mt-1 border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Type:
                  </label>
                  <select
                    className="w-full border p-2 rounded mt-1"
                    value={editedProduct.type}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        type: e.target.value as "free" | "paid",
                      })
                    }
                  >
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
                {editedProduct.type === "paid" && (
                  <div>
                    <label className="font-helvetica text-[18px] font-semibold">
                      Amount:
                    </label>
                    <input
                      type="text"
                      placeholder="Amount"
                      value={editedProduct.amount}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          amount: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded mt-1"
                    />
                  </div>
                )}
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Category:
                  </label>
                  <select
                    value={editedProduct.category}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        category: e.target.value,
                      })
                    }
                    className="w-full mt-1 border p-2 rounded"
                  >
                    <option value="">Select a category</option>
                    <option value="Forex Trading">Forex Trading</option>
                    <option value="Crypto Trading">Crypto Trading</option>
                    <option value="Advanced Day Trading Strategies">
                      Advanced Day Trading Strategies
                    </option>
                  </select>
                </div>
                <div>
                  <label className="font-helvetica text-[18px] font-semibold">
                    Image:
                  </label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setNewImageFile(e.target.files?.[0] || null)
                    }
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <Image
                  src={
                    newImageFile
                      ? URL.createObjectURL(newImageFile)
                      : product.imageSrc
                  }
                  alt="Course"
                  width={120}
                  height={120}
                  className="rounded"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                    onClick={() => {
                      setEditingId(null);
                      setEditedProduct({});
                      setNewImageFile(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <Text className="text-black">
                  <span className="font-bold">Title: </span>
                  {product.title}
                </Text>
                <Text className="text-black">
                  <span className="font-bold">Description: </span>{" "}
                  {product.description}
                </Text>
                <Text className="text-black">
                  <span className="font-bold">Duration: </span>{" "}
                  {product.duration}
                </Text>
                <Text className="text-black capitalize">
                  <span className="font-bold">Type: </span> {product.type}
                </Text>
                {product.type === "paid" && (
                  <Text className="text-black">
                    <span className="font-bold"> Amount: </span> $
                    {product.amount}
                  </Text>
                )}
                <Text className="text-black capitalize">
                  <span className="font-bold">Category: </span>{" "}
                  {product.category}
                </Text>
                <Text className="text-black font-bold">Course Image:</Text>
                <Image
                  src={product.imageSrc}
                  alt="Course"
                  width={120}
                  height={120}
                  className="rounded"
                />
                <div className="flex gap-2 justify-end mt-3">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAndEditProducts;
